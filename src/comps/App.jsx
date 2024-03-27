import '../styles/App.css'
import { useState } from 'react';
import FoodList from './FoodList';
import Search from './Search'
import Navbar from './Navbar';
import Container from './Container';
import Wrapper from './Wrapper';
import Recipe from './Recipe';
import Home from './Home';

function App() {
  const [foodData, setFoodData] = useState ([]);
  const [foodId, setFoodId] = useState (null);

  return (
    <>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} setFoodId={setFoodId} />

      {/* <Wrapper> */}
          <Recipe foodId={foodId} />
        {/* </Wrapper> */}
        
      <Container>
          {!foodId && <FoodList setFoodId = {setFoodId} foodData = {foodData} />}
        </Container>


      
    </>
  )
}

export default App
