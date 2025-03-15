import { useState ,useReducer, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stateful from './components/stateful'
import Stateless from './components/Stateless'
import Helloprops from './components/Helloprops'
import Dynamic from './components/Dynamic'
import Calculator from './components/Calculator'
import Themeswitcher from './components/Themeswitcher'
import { ThemeProvider } from './components/Themecontext'
import Product from './components/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
 const [msg,setmsg]=useState("")
 useEffect(()=>{
   fetch('http://localhost:5000/api/message')
   .then(res=>res.json())
   .then(data=>setmsg(data.message))
   .catch(err=>console.log(err))
 },[]);
  return (
    <>
       <h1>React and Server</h1>
       <p>{msg}</p>
   </>
  )
}

export default App
