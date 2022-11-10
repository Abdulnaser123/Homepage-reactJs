import React from 'react';
import Left from './leftSideProducts/leftSide';
import styles from './products.module.css';
import Right from './rightSideProducts/right';
function products() {
  return (
    <div className={styles.container}>
      <Left />
      <Right />
    </div>
  );
}

export default products;
