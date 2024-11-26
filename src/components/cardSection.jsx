import '../styles/cardSection.css'
import {useState} from 'react'

let hasClicked = new Set();

function addToClickedList(data) {
    hasClicked.add(data);
}

export default function CardSection ({pokemons, shuffleCards, currentScore, currentTopScore, increaseScore, resetScore, increaseTopScore}) {
    const [newGame, setNewGame] = useState(false);
    const [wonGame, setWonGame] = useState(false);

    function handleNewGame () {
        setNewGame(true);
    }

    function handleWonGame () {
        setWonGame(true);
    }

    function checkUpdateTopScore () {
        let boolean = false;
        if(currentTopScore < currentScore){
            boolean = true;
        }
        return boolean;
    }

    let newGameContent;
    let message;
    if(wonGame) {
        message = (
            <h2>Good job! You caught all 10 of them!</h2>
        )
    } else {
        message = (
            <>
              <h2>Game Over</h2>
              <h3>You fetched {currentScore} pokemons. Click button to try and fetch them all!</h3>
            </>
        )
    }
    if(newGame){
        newGameContent = (
            <>
             <button onClick={() => {
                setNewGame(false);
                resetScore();
            }}>
                Play Again!
             </button>
             {message}
            </>
        );
    }

    return (
        <>
            <h2>Hit each pokemon only once...</h2>
            <div className="cardGrid">
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} shuffleCards={shuffleCards} currentScore={currentScore} currentTopScore={currentTopScore} 
                    increaseScore={increaseScore} checkUpdate={checkUpdateTopScore} increaseTopScore={increaseTopScore} handleNewGame = {handleNewGame} newGame = {newGame} handleWonGame={handleWonGame}/>        
                ))}
            </div>
            {newGameContent}
        </>
    );
}

function Card ({pokemon, shuffleCards, currentScore, increaseScore, checkUpdate, increaseTopScore, handleNewGame, newGame, handleWonGame}) {

    function handleClick(pokemon) {
        if(!newGame) {
        if(hasClicked.has(pokemon)){
            hasClicked = new Set();  //Reset list
            if(checkUpdate()){
               increaseTopScore(currentScore) 
            }
            handleNewGame(); //Should somehow lock game until button is clicked for new Game
        } else {           
            addToClickedList(pokemon);
            increaseScore();
            if(currentScore === 9) {
                handleWonGame();
                handleNewGame();
            } else {
                shuffleCards();  
            }
        }
     }
    }


    return (
        <div className="card" onClick={ () => handleClick(pokemon.id)}>
            <img className="frontImg" src={pokemon.img}></img>
            <h3>{pokemon.name}</h3>
        </div>
    );
}