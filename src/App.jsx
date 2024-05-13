import { useState } from 'react'
import Logo from '../src/Assets/Logo.svg'
import './App.css'
import Pages from './Pages/Pages'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [category, setCategory] = useState('All')
  const [showLogin, setShowLogin] = useState(false)
  return (
    
      <div className="App">
        <Navbar />
        <Pages />
        <Footer />
      </div>
  )
}

export default App
