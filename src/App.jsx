import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Explore from './pages/Explore'
import AsteroidPage from './pages/AsteroidPage'
import ScrollToTop from './components/ScrollToTop'
import PlanetPage from './pages/PlanetPage'
import MoonPage from './pages/MoonPage'
import DwarfPlanetPage from './pages/DwarfPlanetPage'
import CometPage from './pages/CometPage'
import DataPage from './pages/DataPage'
import DataPageWrapper from './pages/DataPageWrapper'
import AboutPage from './pages/AboutPage'
import DiscoveriesPage from './pages/DiscoveriesPage'

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
        <Route path='/moon' element={<MoonPage/>} />
        <Route path='/comet' element={<CometPage/>} />
        <Route path='/dwarf-planet' element={<DwarfPlanetPage/>} />
        <Route path='/data' element={<DataPage/>} />
        <Route path="/bodies/:id" element={<DataPageWrapper />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/discoveries" element={<DiscoveriesPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
