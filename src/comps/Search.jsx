import { useState, useRef } from "react"
import styles from '../styles/search.module.css'


const Search = ({ setFoodData }) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    
    const fetchFood = () => {
        if (input.trim() !== '') {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.meals) {
                        setFoodData(data.meals);
                    } else {
                        setFoodData([]);
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    };
        
    const handleSearch = () => {
        fetchFood();
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className={styles.searchContainer}>
            <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Sök efter maträtt..." />
            <button className={styles.searchBtn} onClick={handleSearch}>Sök</button>
        </div>
    )
}

export default Search