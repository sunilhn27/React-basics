import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import NoPage from './pages/NoPage'
import Layout from './pages/Layout'
function App() {
    return (
        <div>
            <BrowserRouter>
                    <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="*" element={<NoPage/>} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App
