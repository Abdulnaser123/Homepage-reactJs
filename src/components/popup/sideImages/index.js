import React, {useState} from 'react';
import styles from './index.module.css';
import {BsQuestionSquare} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';

let SideImage = ({item}) => {
  // console.log(item);
  const [quantity, setQuantity] = useState(1);
  //  console.log(
  const [Image, setMainImage] = useState(item.thumbnail || item.image);
  return (
    <>
      {' '}
      <div className={styles.container}>
        <div className={styles.images}>
          {item.images &&
            item.images.map((img) => (
              <div onMouseMove={() => setMainImage(img)}>
                <img src={img} alt="" />
              </div>
            ))}
        </div>
        <div className={styles.mainImage}>
          <img src={Image} alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.heading}>
            {item.title}
            <div className={styles.priceAndRating}>
              <span>$ {item.price}</span>
              <div className={styles.rating}>
                <span>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <AiFillStar size={20} />
                  ))}
                </span>
                <span>
                  {(item.rating.rate && item.rating.rate) ||
                    (item.rate && item.rate)}{' '}
                  of 5
                </span>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <div>Description</div>
            <div>{item.description}</div>
          </div>
          <div className={styles.Artisan}>
            <span>category</span>
            <span>{item.category}</span>
          </div>
          <div className={styles.Partnership}>
            <span>brand</span>
            <span>{item.brand}</span>
          </div>
          <div className={styles.inCollab}>
            <span>Discount</span>
            <span>{item.discountPercentage}</span>
          </div>
          <div className={styles.size}>
            <div className={styles.sizeText}>colors</div>
            <div className={styles.sizeContainer}>
              <div className={styles.sizes}>
                {[1, 2, 3].map((color) => (
                  <div></div>
                ))}
              </div>
              <div>Colors Guidelines</div>
            </div>
          </div>
          <div className={styles.quantity}>
            <span>quantity</span>
            <div className={styles.container}>
              <div className={styles.counter}>
                <span
                  className={styles.decrease}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </span>
                <span className={styles.number}>{quantity}</span>
                <span
                  className={styles.increase}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </span>
              </div>
              <div className={styles.addToCart}>Add to cart</div>
              <div className={styles.questionMark}>
                <BsQuestionSquare size={20} />
                <div className={styles.addToWish}>Add to wishlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fullDetails}>View Full product Details</div>
    </>
  );
};

export default SideImage;
