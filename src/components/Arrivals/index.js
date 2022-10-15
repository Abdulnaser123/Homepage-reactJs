import styles from "./style.module.css"
import Card from "./Card"

const NewArrival = () => {
  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.MyH1}>Featured</h1>
      <div className={styles.MyContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return <Card />
        })}
      </div>
    </div>
  )
}
export default NewArrival
