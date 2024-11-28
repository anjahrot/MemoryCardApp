import Scoreboard from "./scoreboard"
import '../styles/header.css'
import logo from '../assets/pokemon-seeklogo.png'

export default function Header ({score, topScore}) {

    return (
        <div className="header">
            <div className="title">
                <img className="logo" src={logo}></img>
                <h1>Memory Card Game</h1>
            </div>
            <Scoreboard 
             score= {score}
             topScore={topScore}
             />
        </div>
    )
}