import React, { useState } from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("ההרשמה בוצעה בהצלחה✅");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>ההרשמה</h2>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            type="email"
            name="email"
            placeholder="דואר  אלקטרוני"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="סיסמה"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.loginButton}>
            כניסה
          </button>
          <p className={styles.signupText}>
        יש לך חשבון?<a href="/signup">יצירת חשבון חדש</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
