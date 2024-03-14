import { useState, useEffect } from "react"

const Search = ({ setFoodData }) => {
    const [query, setQuery] = useState('chicken');
    
    useEffect(() => {
        const fetchFood = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setFoodData(data.meals)
            })
        };
        
       {query.trim() !== '' ? fetchFood() : null} 

    }, [query, setFoodData])


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Sök.." />

            {/* <button>Search</button> */}

        </form>
        </>
    )
}

export default Search