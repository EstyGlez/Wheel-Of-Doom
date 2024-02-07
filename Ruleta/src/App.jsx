import { useState } from 'react'
import './App.css'
import Queen from "./Componentes/BlogQueen/Queen.jsx"
import Home from "./Views/Home.jsx"
import Roulette from './Componentes/roulette/Roulette.jsx'

function App() {

  return (
    <>
     <Queen/>
     <Home/>
     <Roulette/>
    </>
  )
}

export default App;
