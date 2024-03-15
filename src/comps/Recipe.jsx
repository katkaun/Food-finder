// import styles from '../styles/foodItem.module.css'

const Recipe = ({ food, foodId }) => {
    return (
    <>
        {/* <p className={styles.foodName}>{food.strMeal}</p> */}
        <div>{foodId}</div>
    </>
    )
}

export default Recipe