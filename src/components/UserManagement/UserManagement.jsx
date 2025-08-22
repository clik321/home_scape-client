import  { useState, useEffect } from 'react';
import styles from './UserManagement.module.css';


   


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', email: '' });

  const clearUsers = () => {
    setUsers([]);
    localStorage.removeItem('users');
  };

  const loadDummyUsers = () => {
    const dummy = [
      { id: 1, name: "רות לוי", email: "ruth@example.com" },
      { id: 2, name: "דני כהן", email: "dani@example.com" },
      { id: 3, name: "שרה מזרחי", email: "sara@example.com" },
    ];
    setUsers(dummy);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      const newId = users.length ? users[users.length - 1].id + 1 : 1;
      setUsers([...users, { id: newId, ...newUser }]);
      setNewUser({ name: '', email: '' });
    }
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const startEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ name: user.name, email: user.email });
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setEditedUser({ name: '', email: '' });
  };

  const handleEditChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    setUsers(
      users.map(user =>
        user.id === editingUserId ? { ...user, ...editedUser } : user
      )
    );
    cancelEdit();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ניהול משתמשים</h2>

      <div className={styles.actions}>
        <button onClick={clearUsers} className={styles.clearButton}>🗑️ מחק את כל המשתמשים</button>
        <button onClick={loadDummyUsers} className={styles.loadButton}>👤 טען משתמשים לדוגמה</button>
      </div>

      <input
        type="text"
        placeholder="חיפוש לפי שם או מייל..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />

      <form className={styles.form} onSubmit={addUser}>
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={newUser.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={newUser.email}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>הוסף משתמש</button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>שם</th>
            <th>אימייל</th>
            <th>פעולה</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleEditChange}
                    className={styles.input}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleEditChange}
                    className={styles.input}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <>
                    <button onClick={saveEdit} className={styles.saveButton}>שמור</button>
                    <button onClick={cancelEdit} className={styles.cancelButton}>בטל</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(user)} className={styles.editButton}>ערוך</button>
                    <button onClick={() => removeUser(user.id)} className={styles.deleteButton}>מחק</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>לא נמצאו תוצאות.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
