import '../styles/cardSection.css'
import {useState} from 'react'

let hasClicked = new Set();

function addToClickedList(data) {
    hasClicked.add(data);
}

export default function CardSection ({pokemons, shuffleCards, currentScore, currentTopScore, increaseScore, resetScore, increaseTopScore}) {
    const [newGame, setNewGame] = useState(false);
    const [wonGame, setWonGame] = useState(false);

    const [flipped, setFlipped] = useState(false);
    

    function checkUpdateTopScore () {
        let boolean = false;
        if(currentTopScore < currentScore){
            boolean = true;
        }
        return boolean;
    }
    
    function handleClick(pokemon) {
        if(!newGame) {
        setFlipped(true);
        if(hasClicked.has(pokemon)){
            hasClicked = new Set();  //Reset list
            if(checkUpdateTopScore()){
               increaseTopScore(currentScore) 
            }
            setNewGame(true); 
        } else {           
            addToClickedList(pokemon);
            increaseScore();
            if(currentScore === 9) {
                setWonGame(true);
                setNewGame(true);
            } else {
                shuffleCards();  
                setTimeout(() => {
                    setFlipped(false);
                }, 1000);
            } 
         }
        }
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
              <h3>You fetched {currentScore} pokemons. Play again to fetch them all!</h3>
            </>
        )
    }
    if(newGame){
        newGameContent = (
            <div className='endGameMessage'>
             {message}
             <button className='newGameBtn' onClick={() => {
                setNewGame(false);
                setFlipped(false);
                resetScore();
            }}>
                Play Again!
             </button>
            </div>
        );
    }

    return (
        <>
            <h2 className='instructions'>Hit each pokemon only once</h2>
            <div className="cardGrid">
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} flipped={flipped} handleClick={handleClick}
                     />        
                ))}
            </div>
            {newGameContent}
        </>
    );
}

function Card ({pokemon, flipped, handleClick}) {
    

    function capitalizeFirstLetter (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
         <div className={`card ${flipped ? "flipped" : ""}`} onClick={ () => handleClick(pokemon.id)}>
            <div className="card-inner">
                <div className="card front">
                    <img className="frontImg" src={pokemon.img}></img>
                    <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
                </div>
                <div className="card back">
                    <img className="backImg" src='../src/assets/pokemon-pokeball-legue-seeklogo.png'></img>
                </div>
            </div>
        </div>
    );
}