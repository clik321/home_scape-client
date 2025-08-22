
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';



const Navbar = () => {
  return (
    <nav className={styles.NavLinks}>
      <NavLink to="/" className={styles.link}>בית</NavLink>
      <NavLink to="/products" className={styles.link}>מוצרים</NavLink>
      <NavLink to="/about" className={styles.link}>אודות</NavLink>
      <NavLink to="/dashboard" className={styles.link}>לוח בקרה</NavLink>
      <NavLink to="/notifications" className={styles.link}>התראות</NavLink>
      <NavLink to="/profile" className={styles.link}>פרופיל</NavLink>
      <NavLink to="/users" className={styles.link}>משתמשים</NavLink>
    </nav>
  );
};




export default Navbar;
