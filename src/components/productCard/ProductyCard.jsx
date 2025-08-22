import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, image, title, description, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price.toLocaleString()} ₪</span>
          <Link to={`/product/${id}`} className={styles.button}>
            לפרטים
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
