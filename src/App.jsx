import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/DaisyNav/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar></Navbar>
      
    </header>
    </>
  )
}

export default App
