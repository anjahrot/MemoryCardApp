import { useState, useEffect } from 'react'
import './App.css'
import {data} from './components/data.jsx'
import Header from './components/header.jsx'
import CardSection from './components/cardSection.jsx'



function App() {
  
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
     let ignore = false;
     if(!ignore){
      setCardData(data);
      setLoaded(true);
     }
     return () => {
      ignore = true;
     }
  }, []);
  
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  
  function increaseScore () {
    setScore( (score) => score + 1 );
  }

  function increaseTopScore () {
    setTopScore(score);          //Need to check into this... 
  }
  
  if(loaded){
  return (
    <div className='container'>
      <Header 
       score={score}
       topScore={topScore}
      />
      <CardSection 
        pokemons = {cardData}
        setScore = {increaseScore}
        setTopScore = {increaseTopScore}
      />
    </div>
  )
} 

return (
  <div className='container'>
    <h2>Is loading...</h2>
  </div>
)
}

export default App
