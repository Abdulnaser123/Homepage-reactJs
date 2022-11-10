import React from 'react';
import styles from './sort.module.css';
function sort() {
  return (
    <div className={styles.container}>
      <span>Women</span>
      <div className={styles.sortBy}>
        <span>sort by</span>
        <select>
          <option>Price</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
}

export default sort;
