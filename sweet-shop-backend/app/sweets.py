from fastapi import APIRouter, Depends, HTTPException, Query, Header
from sqlalchemy.orm import Session
from .database import SessionLocal
from .models import Sweet
from .schemas import SweetCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ➕ ADD SWEET (ADMIN)
@router.post("/add")
def add_sweet(
    data: SweetCreate,
    db: Session = Depends(get_db),
    x_admin: str | None = Header(default=None)
):
    if x_admin != "true":
        raise HTTPException(status_code=403, detail="Admin access required")

    sweet = Sweet(**data.dict())
    db.add(sweet)
    db.commit()
    db.refresh(sweet)
    return sweet

# 📋 ALL SWEETS
@router.get("/all")
def all_sweets(db: Session = Depends(get_db)):
    return db.query(Sweet).all()

# 🔍 FILTER
@router.get("/filter")
def filter_sweets(
    category: str | None = None,
    available: bool | None = None,
    db: Session = Depends(get_db)
):
    q = db.query(Sweet)
    if category:
        q = q.filter(Sweet.category == category)
    if available:
        q = q.filter(Sweet.quantity > 0)
    return q.all()

# 🛒 PURCHASE
@router.post("/purchase/{sweet_id}")
def purchase(sweet_id: int, db: Session = Depends(get_db)):
    sweet = db.query(Sweet).filter(Sweet.id == sweet_id).first()
    if not sweet:
        raise HTTPException(404, "Sweet not found")
    if sweet.quantity <= 0:
        raise HTTPException(400, "Out of stock")

    sweet.quantity -= 1
    db.commit()
    return {"message": "Purchased", "remaining": sweet.quantity}

# ✏️ UPDATE (ADMIN)
@router.put("/update/{sweet_id}")
def update(
    sweet_id: int,
    data: SweetCreate,
    db: Session = Depends(get_db),
    x_admin: str | None = Header(default=None)
):
    if x_admin != "true":
        raise HTTPException(403, "Admin only")

    sweet = db.query(Sweet).filter(Sweet.id == sweet_id).first()
    if not sweet:
        raise HTTPException(404, "Sweet not found")

    for k, v in data.dict().items():
        setattr(sweet, k, v)

    db.commit()
    return sweet

# ❌ DELETE (ADMIN)
@router.delete("/delete/{sweet_id}")
def delete(
    sweet_id: int,
    db: Session = Depends(get_db),
    x_admin: str | None = Header(default=None)
):
    if x_admin != "true":
        raise HTTPException(403, "Admin only")

    sweet = db.query(Sweet).filter(Sweet.id == sweet_id).first()
    if not sweet:
        raise HTTPException(404, "Sweet not found")

    db.delete(sweet)
    db.commit()
    return {"message": "Deleted"}
