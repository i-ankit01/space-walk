import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Explore from './pages/Explore'
import AsteroidPage from './pages/AsteroidPage'
import ScrollToTop from './components/ScrollToTop'
import PlanetPage from './pages/PlanetPage'

function App() {

  return (
    <>
      <BrowserRouter>
         <ScrollToTop/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/asteroid' element={<AsteroidPage/>} />
        <Route path='/planet' element={<PlanetPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
