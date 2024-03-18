import { useState, useEffect } from "react"
import styles from '../styles/search.module.css'

const Search = ({ setFoodData }) => {
    const [input, setInput] = useState('');
    
    useEffect(() => {
        const fetchFood = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then((res) => res.json())
            .then((data) => {
                setFoodData(data.meals)
            })
        };
        
       input.trim() !== '' ? fetchFood() : '';

    }, [input, setFoodData])


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.searchContainer}>
        <form onSubmit={handleSubmit}>
            <input
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Sök efter maträtt..." />
        </form>
        </div>
    )
}

export default Search