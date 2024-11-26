import '../styles/cardSection.css'

export default function CardSection ({pokemons, setScore, setTopScore}) {

    return (
        <>
            <h2>Press each card only once...</h2>
            <div className="cardGrid">
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} setScore={setScore}/>        
                ))}
            </div>
        </>
    );
}

function Card ({pokemon, setScore}) {
    
    let hasClicked = new Set();
    
    function handleClick(pokemon) {
        console.log(hasClicked);
        if(hasClicked.has(pokemon)){
            console.log('Game Over');
        } else {
            hasClicked.add(pokemon);
            setScore();
        }
    }

    return (
        <div className="card" onClick={ () => handleClick(pokemon.id)}>
            <img className="frontImg" src={pokemon.img}></img>
            <h3>{pokemon.name}</h3>
        </div>
    );
}