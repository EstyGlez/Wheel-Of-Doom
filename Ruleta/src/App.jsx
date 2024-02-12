<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./Views/Login.jsx"
// import Welcome from "./Views/Welcome.jsx"
// import NavBar from "./Componentes/navBar/NavBar.jsx"
=======
//import { useState } from 'react'
import Login from "./Views/Login.jsx"
import Welcome from "./Views/Welcome.jsx"
import Home from "./Views/Home.jsx"
import Roulette from './Views/Roulette.jsx'

// import NavBar from "./Componentes/navBar/NavBar.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
>>>>>>> dev

function App() {


  return (
    <>
<<<<<<< HEAD
     <Login/>
     {/* <Welcome/> */}
     {/* <NavBar/> */}
=======
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/roulette" element={<Roulette />} />
          </Routes>
          
        </BrowserRouter>
>>>>>>> dev
    </>
  );
}

export default App