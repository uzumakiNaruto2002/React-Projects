import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(15);

  const Increment = () => {
      if(count < 20){
        setCount((prevCounter) => {
          prevCounter = prevCounter + 1;
          return prevCounter
        });
        setCount((prevCounter) => {
          prevCounter = prevCounter + 1;
          return prevCounter
        });
        setCount((prevCounter) => {
          prevCounter = prevCounter + 1;
          return prevCounter
        });
        setCount(prevCounter => prevCounter + 1);
      }
  }

  const Decrement = () => {
      if(count > 0){
        setCount(count - 1);
      }
  }

  return (
    <>
       <h1>Hey There</h1>
       <h2>Counter value: {count}</h2>
       <button onClick={Increment}>Add</button>
       <button onClick={Decrement}>Minus</button>
    </>
  )
}

export default App
