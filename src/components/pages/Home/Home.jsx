import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ברוכים הבאים לדף הבית</h1>
      <p className={styles.description}>
        ברוכים הבאים לחברת נדל"ן ישראל למכירת ווילות בעיצוב מאלכותי
      </p>
    </div>
  );
};

export default Home;


