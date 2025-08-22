
import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">לוגו</NavLink>
        </div>

        
        <div className={styles.copy}>
          © {new Date().getFullYear()} כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
