const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

async function fetchPokemon(url) {
    let array = [];
    try {
      const response = await fetch(url, {mode: 'cors'});
      if(!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
      const data = await response.json();
      data.results.forEach( async (pokemon) => {
        let data = await fetchPokemonData(pokemon);  //with async await it returns an object
        array.push(data) 
      });
    } catch(error) {
        alert(error)
    }
    return array;  
}


async function fetchPokemonData (pokemon) {
    let pokemonUrl = pokemon.url;
    try {
        const response = await fetch(pokemonUrl);
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`);
          }
        const data = await response.json();
        const pokeData = {id: crypto.randomUUID(), name: data.name, img: data.sprites.front_shiny};
        // console.log(pokeData); //Returns an object
        return pokeData;
      } catch(error) {
          alert(error)
      }
}

const data = await fetchPokemon(url);

// function fetchPokemonCards(url) {
//     let pokemonArray = [];
//     fetch(url)
//     .then(response => response.json())
//     .then(function(allpokemon){
//       allpokemon.results.forEach(function(pokemon){
//         fetchPokemonData(pokemonArray, pokemon); 
//       })
//      })
//      return pokemonArray;
//   }
  
//   function fetchPokemonData(array, pokemon){
//     let url = pokemon.url // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//       fetch(url)
//       .then(response => response.json())
//       .then(function(pokeData){
//       array.push({id: crypto.randomUUID(), name: pokeData.name, img: pokeData.sprites.front_shiny})
//       })
//     }

// const cards = fetchPokemonCards(url);  
export {data};