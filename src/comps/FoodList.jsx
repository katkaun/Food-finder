import FoodItem from "./FoodItem"

const FoodList = ({ foodData }) => {
    return (
        <>
            {foodData.map((food) => (
                <div key={food.idMeal}>
                    <FoodItem food={food} />
                </div>
            ))}
        </>
    )
}

export default FoodList