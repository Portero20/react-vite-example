import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hello from '../src/components/Hello'
import './App.css'
import pizza from '../src/img/pizza-steve.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://static.wikia.nocookie.net/universosteven/images/1/1f/Pizza_Steve.png/revision/latest?cb=20150410231308&path-prefix=es" target="_blank">
          <img src={pizza} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Hello/>
    </div>
  )
}

export default App
