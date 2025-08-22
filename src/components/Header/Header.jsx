import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>אתר נדל"ן ישראל</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>בית</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>אודות</Link>
          </li>
          <li>
            <Link to="/login" className={styles.navLink}>כניסה</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>צור קשר</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
