//import { useState } from 'react'
import Login from "./Views/Login.jsx"
import Welcome from "./Views/Welcome.jsx"
import Home from "./Views/Home.jsx"
import Roulette from './Views/Roulette.jsx'
import NavBar from "./Componentes/navBar/NavBar.jsx"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <BrowserRouter>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/roulette" element={<Roulette />} />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
          
        </BrowserRouter>
    </>
  );
}

export default App
