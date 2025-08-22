import React, { useState } from 'react';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "שם משתמש חובה";
    if (!formData.email) newErrors.email = "מייל חובה";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "מייל לא תקין";
    if (!formData.password) newErrors.password = "סיסמה חובה";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "הסיסמאות לא תואמות";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // שלח נתונים או עשה משהו אחר
      console.log("נרשם:", formData);
    }
  };

  return (
    <div className={styles.container}>
      <h2>הרשמה</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label>
          שם משתמש
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? styles.errorInput : ''}
          />
          {errors.username && <span className={styles.errorMsg}>{errors.username}</span>}
        </label>

        <label>
          אימייל
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </label>

        <label>
          סיסמה
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? styles.errorInput : ''}
          />
          {errors.password && <span className={styles.errorMsg}>{errors.password}</span>}
        </label>

        <label>
          אישור סיסמה
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? styles.errorInput : ''}
          />
          {errors.confirmPassword && <span className={styles.errorMsg}>{errors.confirmPassword}</span>}
        </label>

        <button type="submit" className={styles.submitBtn}>הרשמה</button>
      </form>
    </div>
  );
};

export default RegisterPage;
