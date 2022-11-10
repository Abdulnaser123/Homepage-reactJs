import React from 'react';
import Card from '../../../Arrivals/Card/index';
import productsSpecifications from '../../../products';
import styles from './right.module.css';
function right() {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.MyContainer}>
        {productsSpecifications.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
}

export default right;
