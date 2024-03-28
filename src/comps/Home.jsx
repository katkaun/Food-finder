import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

const Home = () => {

    const [random, setRandom] = useState([]);

useEffect(() => {
    getRandom();
},

[]);

const getRandom = async () => {
    try {
        const mealPromises = Array.from({ length: 4 }, () =>
            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        );
        const responses = await Promise.all(mealPromises);
        const mealData = await Promise.all(responses.map(response => response.json()));
        const meals = mealData.map(data => data.meals[0]);
        setRandom(meals.filter(meal => meal !== null));
    } catch (error) {
        console.error('Error', error);
    }
};

    return  (
        <>
        
          {random.map((food) => {
            return (
                <div key={food.idMeal}>
                    <FoodItem food={food} />
                </div>
            )
          })}
        </>
    )
}

export default Home