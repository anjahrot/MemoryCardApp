import Scoreboard from "./scoreboard"
import '../styles/header.css'

export default function Header ({score, topScore}) {

    return (
        <div className="header">
            <div className="title">
                <h1>Pokemon Memory Card Game</h1>
            </div>
            <Scoreboard 
             score= {score}
             topScore={topScore}
             />
        </div>
    )
}