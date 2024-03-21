import '../styles/App.css'
import { useState } from 'react';
import FoodList from './FoodList';
import Search from './Search'
import Navbar from './Navbar';
import Container from './Container';
import Wrapper from './Wrapper';
import Recipe from './Recipe';

function App() {
  const [foodData, setFoodData] = useState ([]);
  const [foodId, setFoodId] = useState (null);

  return (
    <>
      <Navbar />
      <Search foodData = {foodData} setFoodData = {setFoodData} />
      <Container>
        <Wrapper>
          <FoodList setFoodId = {setFoodId} foodData = {foodData} />  
        </Wrapper>

        <Wrapper>
          <Recipe foodId={foodId} />
        </Wrapper>
      </Container>
    </>
  )
}

export default App
