
import React, { useState, useEffect } from 'react';
import ProductCard from '../../productCard/ProductyCard';
import PropertyFilters from '../../PropertyFilters/PropertyFilters';
import styles from './Products.module.css';
import PropertyModal from '../../PropertyModal/PropertyModal';
import ProductsData from '../../../Data1/products.json';





  const openModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  


   
    <div>
      <h1>לוח הנכסים</h1>
      <div className="propertyModal-grid">
        {PropertyModal.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>₪{property.price}</p>
            <button onClick={() => openModal(property)}>הצגת השימושים</button>
          </div>
      
        ))
      };
    
      
      </div>
      
      <PropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  };  
   
  
  


const Products = () => {
  const [filters, setFilters] = useState({
    search: '',
    minPrice: '',
    maxPrice: ''
  });

  const [filteredProducts, setFilteredProducts] = useState(ProductsData);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    let filtered = ProductsData.filter(product => {
      const matchesSearch = product.name.includes(filters.search);
      const matchesMin = filters.minPrice === '' || product.price >= parseFloat(filters.minPrice);
      const matchesMax = filters.maxPrice === '' || product.price <= parseFloat(filters.maxPrice);
      return matchesSearch && matchesMin && matchesMax;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.title}>נכסים זמינים</h1>
      <PropertyFilters onFilter={handleFilterChange} />
      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            description="וילה יוקרתית"
          />
        ))}
      </div>
    </div>
  )
};


export default Products;
