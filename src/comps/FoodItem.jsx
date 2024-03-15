import styles from '../styles/foodItem.module.css';

const FoodItem = ({ food, setFoodId }) => {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.foodImage} src={food.strMealThumb} alt=""/>
            <div className={styles.foodContent}>
                <p className={styles.foodName}>{food.strMeal}</p>
                <p className={styles.foodOrigin}>{food.strArea}</p> 
            </div>

            <div className={styles.btnContainer}>
                <button onClick={() => {setFoodId(food.idMeal)}} className={styles.recipeBtn}>Till receptet</button>
            </div>
        </div>
    );
}

export default FoodItem