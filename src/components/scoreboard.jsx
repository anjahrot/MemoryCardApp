

export default function Scoreboard ({score, topScore}) {

    return (
        <div className="score">
            <p>Best Game Score: <span>{topScore}</span></p>
            <p>Current Game Score: <span>{score}</span></p>
        </div>
        
    )
}