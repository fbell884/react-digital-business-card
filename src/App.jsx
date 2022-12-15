import { useState } from 'react'
import './App.css'
import Info from './components/Info.jsx' 
import About from './components/About.jsx' 
import Footer from './components/Footer.jsx' 


function App() {

  return (
    <div className="container">
        <main>
          <Info />
          <About />
        </main>
        <Footer />
    </div>
  )
}

export default App
