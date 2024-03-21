import { useEffect, useState } from "react"
import styles from '../styles/recipe.module.css'

const Recipe = ({ foodId }) => {
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchRecipe = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then((response) => response.json())
            .then((result) => setRecipe(result.meals ? result.meals[0] : null))
            .catch(error => console.error('Error:', error));
        }

        if (foodId) {
        fetchRecipe();
        }

        return () => {
            setRecipe(null);
        };

    }, [foodId]);

    if (!recipe) {
        return null;
    }

    const ingredients = Array.from({ length: 20 }, (_, index) => index + 1)
        .map(index => ({
            ingredient: recipe[`strIngredient${index}`],
            measurement: recipe[`strMeasure${index}`]
        }))
        .filter(({ ingredient }) => ingredient);

    

    return (
        <>
        <div className={styles.card}>
         <h1 className={styles.title}>{recipe.strMeal}</h1> 
            <img className={styles.recipeImage}src={recipe.strMealThumb} alt={recipe.strMeal} /> 

            <div className={styles.recipeDetails}>
                <span><strong>{recipe.strArea}</strong></span>
                <span><strong>{recipe.strCategory}</strong></span>
                <span><strong>{recipe.strTags}</strong></span>
            </div>
            
            <h2>Ingredienser</h2>
                <ul>
                    {ingredients.map(({ ingredient, measurement }, index) => (
                        <li key={index}>{measurement} {ingredient}</li>
                    ))}
                </ul>
            <h2>Gör såhär</h2>
            <div className={styles.instructions}>
                <p>{recipe.strInstructions}</p>
            </div>
         </div>
        </>
    )
}

export default Recipe