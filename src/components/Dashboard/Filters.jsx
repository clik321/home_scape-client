import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ onChangeArea, onChangePeriod }) => {
  return (
    <div className={styles.filters}>
      <select onChange={e => onChangeArea(e.target.value)}>
        <option value="">כל האזורים</option>
        <option value="telaviv">תל אביב</option>
        <option value="jerusalem">ירושלים</option>
        <option value="haifa">חיפה</option>
      </select>

      <select onChange={e => onChangePeriod(e.target.value)}>
        <option value="lastMonth">חודש אחרון</option>
        <option value="last3Months">3 חודשים אחרונים</option>
        <option value="lastYear">שנה אחרונה</option>
      </select>
    </div>
  );
};

export default Filters;
