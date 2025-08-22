import React, { useState } from 'react';
import InfoCard from './InfoCard';
import SalesChart from './Saleschart';
import Filters from './Filters';
import { FaHome, FaDollarSign, FaUsers } from 'react-icons/fa';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [area, setArea] = useState('');
  const [period, setPeriod] = useState('lastMonth');

  // כאן ניתן להוסיף לוגיקה דינמית לפי פילטרים

  return (
    <div className={styles.dashboard}>
      <h1>לוח בקרה - פרויקט מכירת וילות</h1>
      <Filters onChangeArea={setArea} onChangePeriod={setPeriod} />

      <div className={styles.cards}>
        <InfoCard title="סה״כ נכסים" value="125" icon={<FaHome />} />
        <InfoCard title="סה״כ מכירות" value="67" icon={<FaDollarSign />} />
        <InfoCard title="לקוחות חדשים" value="24" icon={<FaUsers />} />
      </div>

      <div className={styles.chartSection}>
        <h2>מכירות אחרונות</h2>
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
