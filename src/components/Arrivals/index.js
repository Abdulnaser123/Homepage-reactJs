import styles from './style.module.css';
import Card from './Card';
import productsSpecifications from '../products';

const NewArrival = () => {
  //   console.log(productsSpecifications);
  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.MyH1}>Featured </h1>
      <div className={styles.MyContainer}>
        {productsSpecifications.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default NewArrival;
