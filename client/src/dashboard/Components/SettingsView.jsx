import React, { useState } from "react";


const roles = ["Admin", "Warehouse Manager", "Inventory Staff", "Viewer"];
const modules = ["Dashboard", "Inventory", "Orders", "Reports", "Vendors", "Support"];

export default function SettingsView() {
  const [users, setUsers] = useState([
  { name: "John Admin", email: "john@stackflow.com", password: "1234", role: "Admin", access: modules, status: "active", isEditing: false },
  { name: "Jane Manager", email: "jane@stackflow.com", password: "1234", role: "Warehouse Manager", access: ["Inventory", "Orders"], status: "active", isEditing: false },
  { name: "Bob Staff", email: "bob@stackflow.com", password: "1234", role: "Inventory Staff", access: ["Inventory"], status: "inactive", isEditing: false },
  { name: "Alice Supervisor", email: "alice@stackflow.com", password: "1234", role: "Supervisor", access: ["Orders", "Returns"], status: "active", isEditing: false },
  { name: "David Viewer", email: "david@stackflow.com", password: "1234", role: "Viewer", access: ["Dashboard"], status: "inactive", isEditing: false },
  { name: "Eva Lead", email: "eva@stackflow.com", password: "1234", role: "Team Lead", access: ["Inventory", "Reports"], status: "active", isEditing: false },
  { name: "Mark Operator", email: "mark@stackflow.com", password: "1234", role: "Operator", access: ["Receiving", "Dispatch"], status: "active", isEditing: false },
  { name: "Sophia Analyst", email: "sophia@stackflow.com", password: "1234", role: "Data Analyst", access: ["Reports"], status: "active", isEditing: false },
  { name: "Tom Assistant", email: "tom@stackflow.com", password: "1234", role: "Assistant", access: ["Orders", "Inventory"], status: "inactive", isEditing: false },
  { name: "Lily Inspector", email: "lily@stackflow.com", password: "1234", role: "Inspector", access: ["Inventory", "Returns"], status: "active", isEditing: false },
  { name: "Sam Dispatcher", email: "sam@stackflow.com", password: "1234", role: "Dispatcher", access: ["Dispatch"], status: "active", isEditing: false },
  { name: "Nina Receiver", email: "nina@stackflow.com", password: "1234", role: "Receiving Staff", access: ["Receiving"], status: "active", isEditing: false },
  { name: "George Planner", email: "george@stackflow.com", password: "1234", role: "Planner", access: ["Warehouse Map", "Reports"], status: "active", isEditing: false },
  { name: "Olivia Manager", email: "olivia@stackflow.com", password: "1234", role: "Warehouse Manager", access: ["Inventory", "Orders", "Returns"], status: "active", isEditing: false },
  { name: "Chris Support", email: "chris@stackflow.com", password: "1234", role: "Support Staff", access: ["Support"], status: "inactive", isEditing: false },
  { name: "Rachel Admin", email: "rachel@stackflow.com", password: "1234", role: "Admin", access: modules, status: "active", isEditing: false }
]);

  const [newUser, setNewUser] = useState({
    name: "", email: "", role: "", password:"", access: [], status: "active"
  });

  const toggleAccess = (module, isNew = true, index = null) => {
    if (isNew) {
      setNewUser(prev => ({
        ...prev,
        access: prev.access.includes(module)
          ? prev.access.filter(m => m !== module)
          : [...prev.access, module],
      }));
    } else {
      const updatedUsers = [...users];
      const user = updatedUsers[index];
      user.access = user.access.includes(module)
        ? user.access.filter(m => m !== module)
        : [...user.access, module];
      setUsers(updatedUsers);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.role || !newUser.password) return alert("Fill all fields");
    setUsers([...users, { ...newUser, isEditing: false }]);
    setNewUser({ name: "", email: "",password:"", role: "", access: [], status: "active" });
  };

  const toggleEdit = (index) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, isEditing: !user.isEditing } : user
    );
    setUsers(updatedUsers);
  };

  const updateUser = (index, key, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][key] = value;
    setUsers(updatedUsers);
  };

  return (
    <div className="settings-container">
      <h2>System Settings</h2>

      <div className="settings-user">
        {/* Profile Section */}
      <section className="card">
        <h3>User Profile</h3>
        <div className="profile-grid">
          <div><label>Full Name</label><input value="John Doe" disabled /></div>
          <div><label>Email</label><input value="john@company.com" disabled /></div>
          <div><label>Role</label><input value="Warehouse Manager" disabled /></div>
          <div><label>Access</label><input value="Inventory, Orders" disabled /></div>
        </div>
      </section>

      {/* Add User */}
      <section className="card">
        <h3>Admin: Add New User</h3>
        <div className="form-grid">
          <input placeholder="Full Name" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
          <input placeholder="Email Address" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
          <input type="password" placeholder="User Password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
          <select value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}>
            <option value="">Select Role</option>
            {roles.map(role => <option key={role}>{role}</option>)}
          </select>
          <div className="access-checklist">
            {modules.map(mod => (
              <label key={mod}>
                <input
                  type="checkbox"
                  checked={newUser.access.includes(mod)}
                  onChange={() => toggleAccess(mod)}
                />
                {mod}
              </label>
            ))}
          </div>
          <button className="btn" onClick={addUser}>Add User</button>
        </div>
      </section>
      </div>

      {/* Editable User Table */}
      <section className="card1">
        <h3>Current Users</h3>
        <div className="table-box">
          <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th><th>Access</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  {u.isEditing ? (
                    <select value={u.role} onChange={(e) => updateUser(i, "role", e.target.value)}>
                      {roles.map(role => <option key={role}>{role}</option>)}
                    </select>
                  ) : u.role}
                </td>
                <td>
                  {u.isEditing ? (
                    <div className="access-checklist-inline">
                      {modules.map(mod => (
                        <label key={mod}>
                          <input
                            type="checkbox"
                            checked={u.access.includes(mod)}
                            onChange={() => toggleAccess(mod, false, i)}
                          />
                          {mod}
                        </label>
                      ))}
                    </div>
                  ) : (
                    u.access.join(", ")
                  )}
                </td>
                <td><span className={`status ${u.status}`}>{u.status}</span></td>
                <td>
                  <button className="btn-sm" onClick={() => toggleEdit(i)}>
                    {u.isEditing ? "Save" : "Edit"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </div>
  );
}
