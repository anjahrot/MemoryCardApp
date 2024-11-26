import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx'
import CardSection from './components/cardSection.jsx'



function App() {
  
  const [cardData, setCardData] = useState([]);
  

  //Fetch data from API only on mounting with useEffect
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  async function fetchPokemonData (pokemon) {
    let pokemonUrl = pokemon.url;
    try {
        const response = await fetch(pokemonUrl);
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`);
          }
        const data = await response.json();
        const pokeData = {id: crypto.randomUUID(), name: data.name, img: data.sprites.front_shiny};
        return pokeData;
      } catch(error) {
          alert(error)
      }
}

  useEffect( () => {
    async function fetchPokemon(url) {
      let array = [];
      try {
        const response = await fetch(url, {mode: 'cors'});
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`);
          }
        const data = await response.json();
        for(const pokemon of data.results){
          let data = await fetchPokemonData(pokemon);
          array.push(data) 
        };
      } catch(error) {
          alert(error)
      }
      setCardData(array);
    };

    fetchPokemon(url);
  }, []);

  
  
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  
  function increaseScore () {
    setScore( (score) => score + 1 );
  }

  function increaseTopScore () {
    setTopScore(score);          
  }
  
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

export default App
