import { useState, useEffect } from "react"

const Search = ({ foodData, setFoodData }) => {
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        const fetchFood = () => {
            fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setFoodData(data.results)
            })
        };
        
       {query.trim() !== '' ? fetchFood() : null} 

    }, [query, setFoodData])


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Sök.." />
        </>
    )
}

export default Search