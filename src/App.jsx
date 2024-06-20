import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SellPage from './pages/SellPage'
import BuyPage from './pages/BuyPage'

function App() {

  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sell' element={<SellPage />} />
      <Route path='/buy' element={<BuyPage />} />
    </Routes> 
    </BrowserRouter>
  )
}

export default App
