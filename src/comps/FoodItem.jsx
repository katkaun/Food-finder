const FoodItem = ({ food }) => {
    return (
        <>
        <img src={food.strMealThumb} alt="" />
        <h1> {food.strMeal} </h1>
        <button>Till receptet</button>
        </>
    )
}

export default FoodItem