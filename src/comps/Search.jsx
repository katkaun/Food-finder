import { useState, useEffect } from "react"
import styles from '../styles/search.module.css'

const Search = ({ setFoodData }) => {
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        const fetchFood = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setFoodData(data.meals)
            })
        };
        
       query.trim() !== '' ? fetchFood() : '';

    }, [query, setFoodData])


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.searchContainer}>
        <form onSubmit={handleSubmit}>
            <input
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Sök efter maträtt..." />
        </form>
        </div>
    )
}

export default Search