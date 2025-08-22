import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../../../Data1/products.json';
import styles from './Product.module.css';

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  const goBack = () => {
    navigate('/products'); 
  };

  if (!product) {
    return <div className={styles.notFound}>וילה של 6חדרים  שינה בקומה עליונה  וחניה פרטית,עם נוף מול הים</div>;
  }

  return (
    <div className={styles.card}>
      <button onClick={goBack} className={styles.backButton}>
        חזרה לקטלוג
      </button>

      <h1 className={styles.name}>{product.name}</h1>
      <p className={styles.price}>מחיר: ₪{product.price.toLocaleString()}</p>

      <div className={styles.imagesGallery}>
        {product.images && product.images.length > 0 ? (
          product.images.map((img) => (
            <div key={img.id} className={styles.imageCard}>
              <img src={img.url} alt={img.description} className={styles.image} />
              <p className={styles.imageDescription}>{img.description}</p>
            </div>
          ))
        ) : (
          <p>אין תמונות להצגה</p>
        )}
      </div>
    </div>
  );
};

export default Product;
