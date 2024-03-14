import '../styles/App.css'
import { useState } from 'react';
import FoodList from './FoodList';
import Search from './Search'
import Navbar from './Navbar';

function App() {
  const [foodData, setFoodData] = useState ([]);

  return (
    <>
      <Navbar />
      <Search foodData = {foodData} setFoodData = {setFoodData} />
      <FoodList foodData = {foodData} />
    </>
  )
}

export default App
