import { useState } from 'react'
import './App.css'
import { cards, data } from './components/data.jsx'



function App() {
  const [count, setCount] = useState(0)
  console.log(cards);
  console.log(data);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
