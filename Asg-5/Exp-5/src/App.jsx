import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'
import Helloprops from './components/Helloprops'
import Add from './components/calculator/Add'
import Sub from './components/calculator/Sub'
import Mul from './components/calculator/Mul'
import Div from './components/calculator/Div'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        {/* <Stateful></Stateful>
        <Stateless></Stateless> */}
        {/* <Helloprops name="Vimala"></Helloprops> */}
        
       </div>
    </>
  )
}
export default App
