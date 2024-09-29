import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx';
import LikeButton from './LIkeButton.jsx';
import Ludo from "./LudoBoard.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      {/* <Counter/> */}
      <Ludo/>
      {/* <LikeButton/> */}
    </>
  )
}

export default App
