import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homework1 from './component/Homework1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homework1></Homework1>
    </>
  )
}

export default App
