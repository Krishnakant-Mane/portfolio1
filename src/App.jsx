import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './pages/Navbar'
import { Krishna } from './pages/Krishna'

function App() {

  return (
    <>
      <Navbar/>
      <Krishna/>
    </>
  )
}

export default App
