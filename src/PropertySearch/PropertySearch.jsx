import React from 'react';
import styles from './PropertySearch.module.css';

const PropertySearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="חפש נכס לפי מילות מפתח..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default PropertySearch;
