import { useState } from 'react'
import './App.css'
import { data } from './components/data.jsx'
import Header from './components/header.jsx'
import CardSection from './components/cardSection.jsx'



function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  
  function increaseScore () {
    setScore( (score) => score + 1 );
  }

  function increaseTopScore () {
    setTopScore(score);          //Need to check into this... 
  }

  return (
    <div className='container'>
      <Header 
       score={score}
       topScore={topScore}
      />
      <CardSection 
        pokemons = {data}
        setScore = {increaseScore}
        setTopScore = {increaseTopScore}
      />
    </div>
  )
}

export default App
