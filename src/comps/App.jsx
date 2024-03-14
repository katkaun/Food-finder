import '../styles/App.css'
import { useState } from 'react';
import FoodList from './FoodList';
import Search from './Search'

function App() {
  const [foodData, setFoodData] = useState ([]);

  return (
    <>
      <Search foodData = {foodData} setFoodData = {setFoodData} />
      <FoodList foodData = {foodData} />
    </>
  )
}

export default App
