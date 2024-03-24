import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prps from './components/Prps'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
     username: "Rupesh",
     age: 21
  }

  return (
    <>
        <Prps channel="Rupesh" obj = {myObj}/>
    </>
  )
}

export default App
