import React from 'react';
import styles from './Apparels.module.css';
import Sort from './Sorting/sort';
import Products from './products/products';

function Apparels() {
  return (
    <>
      <div className={styles.ApparelsContainer}>
        <div className={styles.Apparels}>
          <h1>Apparels</h1>
          <p>
            White Gold began gaining popularity in the early 1900’s as an
            alternative to platinum.{' '}
          </p>
        </div>

        <img
          alt="Apparels"
          src="./images/8402c0f4f134ac3da6567d064219651be69fb559.png"
          width={400}
        />
      </div>
      <div className={styles.container}>
        <Sort />
        <Products />
      </div>
    </>
  );
}

export default Apparels;
