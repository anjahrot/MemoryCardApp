import '../styles/cardSection.css'

export default function CardSection ({pokemons, setScore, setTopScore}) {
    console.log(pokemons);
    return (
        <>
            <h2>Press each card only once...</h2>
            <div className="cardGrid">
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon}/>        
                ))}
            </div>
        </>
    );
}

function Card ({pokemon}) {
    
    return (
        <div className="card">
            <img className="frontImg" src={pokemon.img}></img>
            <h3>{pokemon.name}</h3>
        </div>
    );
}