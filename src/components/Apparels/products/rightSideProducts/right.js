import React, {useEffect, useState} from 'react';
import Card from '../../../Arrivals/Card/index';
import styles from './right.module.css';
import axios from 'axios';

function Right() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      //  console.log(response.data);
      setProducts(response.data);
    };
    products();
  }, []);
  return (
    <div className={styles.MainContainer}>
      <div className={styles.MyContainer}>
        {products &&
          products.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </div>
  );
}

export default Right;
