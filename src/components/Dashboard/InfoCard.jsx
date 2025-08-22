import React from 'react';
import styles from './InfoCard.module.css';

const InfoCard = ({ title, value, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
