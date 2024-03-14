import '../styles/App.css'
import Search from './Search'

function App() {
  const [foodData, setFoodData] = useState ([]);

  return (
    <>
      <Search setFoodData={setFoodData} />
      <ul>
        {foodData.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </>
  )
}

export default App
