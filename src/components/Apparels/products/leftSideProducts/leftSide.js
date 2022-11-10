import React from 'react';
import styles from './lestSide.module.css';
import {useEffect, useState} from 'react';
import Category from './category/category';
import axios from 'axios';
function LeftSide() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const categories = await axios.get(
        'https://api.storerestapi.com/categories'
      );
      setCategories(categories.data.data);

      const products = await axios.get('https://api.storerestapi.com/products');
      setProducts(products.data.data);
    };
    FetchData();
  }, []);
  //   console.log(categories);
  //   console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span>FILTER</span>
        <span>RESET</span>
      </div>
      {categories.map((cat) => (
        <Category categoryName={cat.name} products={products} />
      ))}
    </div>
  );
}

export default LeftSide;
