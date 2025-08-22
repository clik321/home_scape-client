import React, { useState } from 'react';
import styles from './PropertyFilters.module.css';

const PropertyFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    search: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className={styles.filtersContainer}>
      <input
        type="text"
        name="search"
        placeholder="חיפוש לפי כותרת"
        value={filters.search}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="number"
        name="minPrice"
        placeholder="מחיר מינימלי"
        value={filters.minPrice}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="מחיר מקסימלי"
        value={filters.maxPrice}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default PropertyFilters;
