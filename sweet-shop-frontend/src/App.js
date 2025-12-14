import { useEffect, useState } from "react";

function App() {
  // 🔐 AUTH
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ username: "", password: "" });

  // 🍬 SWEETS
  const [sweets, setSweets] = useState([]);

  // 🔍 SEARCH & FILTER
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // ➕ ADD SWEET (ADMIN)
  const [newSweet, setNewSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  // ✏️ EDIT SWEET (ADMIN)
  const [editSweetId, setEditSweetId] = useState(null);
  const [editSweet, setEditSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  // =====================
  // 🔐 LOGIN
  // =====================
  const login = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Invalid login");
      return;
    }

    const data = await res.json();
    setUser(data);
  };

  // =====================
  // 🍬 FETCH SWEETS
  // =====================
  const fetchSweets = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/sweets/all");
    const data = await res.json();
    setSweets(data);
  };

  // =====================
  // 🛒 PURCHASE (USER)
  // =====================
  const purchaseSweet = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/sweets/purchase/${id}`, {
      method: "POST",
    });
    fetchSweets();
  };

  // =====================
  // ➕ ADD (ADMIN)
  // =====================
  const addSweet = async () => {
    await fetch("http://127.0.0.1:8000/api/sweets/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin": "true",
      },
      body: JSON.stringify(newSweet),
    });

    setNewSweet({ name: "", category: "", price: "", quantity: "" });
    fetchSweets();
  };

  // =====================
  // ✏️ UPDATE (ADMIN)
  // =====================
  const updateSweet = async () => {
    await fetch(
      `http://127.0.0.1:8000/api/sweets/update/${editSweetId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin": "true",
        },
        body: JSON.stringify(editSweet),
      }
    );

    setEditSweetId(null);
    fetchSweets();
  };

  // =====================
  // ❌ DELETE (ADMIN)
  // =====================
  const deleteSweet = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/sweets/delete/${id}`, {
      method: "DELETE",
      headers: {
        "x-admin": "true",
      },
    });
    fetchSweets();
  };

  useEffect(() => {
    if (user) fetchSweets();
  }, [user]);

  // =====================
  // 🔐 LOGIN UI
  // =====================
  if (!user) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <br /><br />

        <button onClick={login}>Login</button>

        <p><b>Admin:</b> admin / admin123</p>
        <p><b>User:</b> user / user123</p>
      </div>
    );
  }

  // =====================
  // 🔍 FILTER LOGIC
  // =====================
  const filteredSweets = sweets.filter(
    (sweet) =>
      sweet.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "" ||
        sweet.category.toLowerCase() ===
          categoryFilter.toLowerCase())
  );

  // =====================
  // 🏠 DASHBOARD
  // =====================
  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Welcome, {user.username} ({user.role})
      </h2>

      {/* 🔍 SEARCH & FILTER */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Search sweet..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          placeholder="Filter by category"
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        />
      </div>

      {/* ➕ ADD SWEET (ADMIN ONLY) */}
      {user.role === "admin" && (
        <div
          style={{
            border: "2px solid green",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>Add New Sweet (Admin)</h3>

          <input
            placeholder="Name"
            value={newSweet.name}
            onChange={(e) =>
              setNewSweet({ ...newSweet, name: e.target.value })
            }
          /><br />

          <input
            placeholder="Category"
            value={newSweet.category}
            onChange={(e) =>
              setNewSweet({ ...newSweet, category: e.target.value })
            }
          /><br />

          <input
            type="number"
            placeholder="Price"
            value={newSweet.price}
            onChange={(e) =>
              setNewSweet({ ...newSweet, price: e.target.value })
            }
          /><br />

          <input
            type="number"
            placeholder="Quantity"
            value={newSweet.quantity}
            onChange={(e) =>
              setNewSweet({ ...newSweet, quantity: e.target.value })
            }
          /><br /><br />

          <button onClick={addSweet}>Add Sweet</button>
        </div>
      )}

      {/* 🍭 SWEETS LIST */}
      {filteredSweets.map((sweet) => (
        <div
          key={sweet.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {editSweetId === sweet.id ? (
            <>
              <input
                value={editSweet.name}
                onChange={(e) =>
                  setEditSweet({
                    ...editSweet,
                    name: e.target.value,
                  })
                }
              /><br />

              <input
                value={editSweet.category}
                onChange={(e) =>
                  setEditSweet({
                    ...editSweet,
                    category: e.target.value,
                  })
                }
              /><br />

              <input
                type="number"
                value={editSweet.price}
                onChange={(e) =>
                  setEditSweet({
                    ...editSweet,
                    price: e.target.value,
                  })
                }
              /><br />

              <input
                type="number"
                value={editSweet.quantity}
                onChange={(e) =>
                  setEditSweet({
                    ...editSweet,
                    quantity: e.target.value,
                  })
                }
              /><br /><br />

              <button onClick={updateSweet}>Save</button>
              <button
                onClick={() => setEditSweetId(null)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p><b>{sweet.name}</b></p>
              <p>Category: {sweet.category}</p>
              <p>Price: ₹{sweet.price}</p>
              <p>Quantity: {sweet.quantity}</p>

              {sweet.quantity > 0 ? (
                <button onClick={() => purchaseSweet(sweet.id)}>
                  Purchase
                </button>
              ) : (
                <button
                  disabled
                  style={{
                    background: "gray",
                    cursor: "not-allowed",
                  }}
                >
                  Out of Stock
                </button>
              )}

              {user.role === "admin" && (
                <>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      setEditSweetId(sweet.id);
                      setEditSweet(sweet);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => deleteSweet(sweet.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
