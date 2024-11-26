import '../styles/cardSection.css'
import {useState} from 'react'

let hasClicked = new Set();

function addToClickedList(data) {
    hasClicked.add(data);
}

export default function CardSection ({pokemons, shuffleCards, currentScore, currentTopScore, increaseScore, resetScore, increaseTopScore}) {
    const [newGame, setNewGame] = useState(false);

    function handleNewGame () {
        setNewGame(true);
    }

    function checkUpdateTopScore () {
        let boolean = false;
        if(currentTopScore < currentScore){
            boolean = true;
        }
        return boolean;
    }

    let newGameContent;
    if(newGame){
        newGameContent = (
            <button onClick={() => setNewGame(false)}>
                Play Again!
            </button>
        );
    }

    return (
        <>
            <h2>Hit each pokemon only once...</h2>
            <div className="cardGrid">
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} shuffleCards={shuffleCards} currentScore={currentScore} currentTopScore={currentTopScore} 
                    increaseScore={increaseScore} resetScore={resetScore} checkUpdate={checkUpdateTopScore} increaseTopScore={increaseTopScore} handleNewGame = {handleNewGame}/>        
                ))}
            </div>
            {newGameContent}
        </>
    );
}

function Card ({pokemon, shuffleCards, currentScore, increaseScore, resetScore, checkUpdate, increaseTopScore, handleNewGame}) {

    function handleClick(pokemon) {
        if(hasClicked.has(pokemon)){
            console.log('Game Over');
            hasClicked = new Set();  //Reset list
            if(checkUpdate()){
               increaseTopScore(currentScore) 
            }
            handleNewGame(); //Should somehow lock game until button is clicked for new Game
            resetScore();
        } else {           
            addToClickedList(pokemon);
            increaseScore();
            shuffleCards();  
            //win condition - check if 10 pokemons in set..
        }
    }


    return (
        <div className="card" onClick={ () => handleClick(pokemon.id)}>
            <img className="frontImg" src={pokemon.img}></img>
            <h3>{pokemon.name}</h3>
        </div>
    );
}