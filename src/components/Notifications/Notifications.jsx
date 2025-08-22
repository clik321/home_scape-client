import React from 'react';
import styles from './Notifications.module.css';

const Notifications = () => {
  const notifications = [
    "נכס חדש נוסף בהצלחה",
    "המשתמש יוסי שלח הודעה",
    "עדכון מחיר עבור וילה 3"
  ];

  return (
    <div className={styles.notifications}>
      <h2 className={styles.title}>התראות</h2>
      <ul className={styles.list}>
        {notifications.map((note, index) => (
          <li key={index} className={styles.item}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
