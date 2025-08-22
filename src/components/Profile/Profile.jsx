
import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const user = {
    name: "מורעי סועד",
    email: "soad@example.com",
    role: "מנהל מערכת"
  };

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>פרופיל משתמש</h2>
      <div className={styles.details}>
        <p><strong>שם:</strong> {user.name}</p>
        <p><strong>אימייל:</strong> {user.email}</p>
        <p><strong>תפקיד:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
