import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className=' w-screen h-screen ' style = {{backgroundColor: color}}>
      </div>
  )
}

export default App
