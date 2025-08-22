import React from 'react';
import styles from './About';

  
    

 function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>אודות האתר</h1>
      <p className={styles.description}>
        ברוכים הבאים לאתר הנדל"ן המוביל למכירת וילות יוקרה! אנו מתמחים בחיבור בין קונים רציניים לבין בעלי נכסים יוצאי דופן, תוך שמירה על רמת שירות גבוהה.
      </p>
      <p className={styles.description}>
        באתר תוכלו למצוא מגוון רחב של וילות מעוצבות ומרוהטות, עם תצוגת תמונות באיכות גבוהה, מפרט טכני מלא ומידע מפורט על כל נכס.
      </p>
      <p className={styles.description}>
        המערכת שלנו מציעה חוויית משתמש נוחה, סינון חכם לפי מיקום, מחיר, שטח ותכונות מיוחדות, כדי לעזור לכם למצוא את הווילה המושלמת.
      </p>
      <p className={styles.description}>
        הצטרפו אלינו עוד היום ותגלו את הדרך הקלה, הבטוחה והמהירה לרכישת וילת חלומותיכם.
      </p>
    </div>
  );
};


export default About;
