import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Home from './pages/home/Home'
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>  
        <Route path='about' element={<About/>}/>  
        <Route path='contact' element={<Contact/>}/>  
        <Route path='portfolio' element={<Portfolio/>}/>  
      </Routes>      
    </BrowserRouter>
  )
}

export default App
