import React, {useState} from 'react';
import styles from './category.module.css';
import {FaAngleDown, FaAngleUp, FaAngleRight} from 'react-icons/fa';
import './category.css';

function Category({categoryName, products}) {
  //   console.log(products);
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.cat}>
        <p>{categoryName}</p>
        <div onClick={() => setIsActive(!isActive)} className={styles.down}>
          {!isActive && <FaAngleDown />}
          {isActive && <FaAngleUp />}
        </div>
      </div>
      <div className={`products${isActive ? 'Active' : 'InActive'}`}>
        {products.map((item) => {
          if (item.category.name === categoryName) {
            return (
              <div className={styles.products}>
                <FaAngleRight />
                {item.title}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Category;
