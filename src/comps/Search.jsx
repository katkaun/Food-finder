import { useState, useEffect, useRef } from "react"
import styles from '../styles/search.module.css'

const Search = ({ setFoodData }) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    
    useEffect(() => {
        const fetchFood = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then((res) => res.json())
            .then((data) => {setFoodData(data.meals)})
            .catch(error => console.error('Error:', error));
        };
        
       input.trim() !== '' ? fetchFood() : '';

    }, [input, setFoodData])


    return (
        <div className={styles.searchContainer}>
            <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Sök efter maträtt..." />
        </div>
    )
}

export default Search