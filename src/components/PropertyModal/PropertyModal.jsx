import React from "react";
import styles from "./PropertyModal.module.css";

const PropertyModal = ({ isOpen, onClose, property }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <img src={property.image} alt={property.title} className={styles.modalImage} />
        <h2 className={styles.modalTitle}>{property.title}</h2>
        <p className={styles.modalPrice}>₪{property.price.toLocaleString()}</p>
        <p className={styles.modalDescription}>{property.description}</p>
        <div className={styles.modalDetails}>
          <span>📍 {property.location}</span>
          <span>🛏 {property.bedrooms} חדרים</span>
          <span>🛁 {property.bathrooms} מקלחות</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
