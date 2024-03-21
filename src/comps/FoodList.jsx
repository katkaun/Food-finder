import FoodItem from "./FoodItem"

const FoodList = ({ foodData, setFoodId }) => {
    return (
        <>
            {foodData.map((food) => (
                <div key={food.idMeal} onClick={() => setFoodId}>
                    <FoodItem setFoodId={setFoodId} food={food} />
                </div>
            ))}
        </>
    )
}

export default FoodList