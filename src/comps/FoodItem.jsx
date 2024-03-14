import styles from '../styles/foodItem.module.css';

const FoodItem = ({ food }) => {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.foodImage} src={food.strMealThumb} alt=""/>
            <div className={styles.foodContent}>
                <p className={styles.foodName}>{food.strMeal}</p>
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.recipeBtn}>Till receptet</button>
            </div>
        </div>
    );
}

export default FoodItem;