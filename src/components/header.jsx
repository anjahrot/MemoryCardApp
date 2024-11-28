import Scoreboard from "./scoreboard"
import '../styles/header.css'

export default function Header ({score, topScore}) {

    return (
        <div className="header">
            <div className="title">
                <img className="logo" src='../src/assets/pokemon-seeklogo.png'></img>
                <h1>Memory Card Game</h1>
            </div>
            <Scoreboard 
             score= {score}
             topScore={topScore}
             />
        </div>
    )
}