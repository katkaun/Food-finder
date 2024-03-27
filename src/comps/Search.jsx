import { useState, useRef } from "react"
import styles from '../styles/search.module.css'


const Search = ({ setFoodData, setFoodId }) => {
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
        setFoodId(null);
        setInput(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchFood();
        }
      }

    return (
        <div className={styles.searchContainer}>
            <input
            name="search"
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search for recipe..." />
            <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search