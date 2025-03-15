import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stateful from './components/stateful'
import Stateless from './components/Stateless'
import Helloprops from './components/Helloprops'
import Dynamic from './components/Dynamic'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Stateful />
      <Stateless />
      <Helloprops name="vimala"/>
      <Dynamic />
    </>
  )
}

export default App
