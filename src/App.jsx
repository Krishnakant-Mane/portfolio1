import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './pages/Navbar'
import { Krishna } from './pages/Krishna'
import { Coursel } from './pages/Coursel'
import MagneticCursor from "./pages/MagneticCursor";
import Magnetic from "./pages/Magnetic";
import { NewCursor } from './pages/NewCursor'
function App() {

  return (
    <div className="h-screen flex items-center justify-center gap-10 bg-gray-100">

      {/* <MagneticCursor />

      <Magnetic>
        <button data-cursor="magnetic" className=" hover:bg-white hover:text-black border border-black px-6 py-3 bg-black text-white rounded-xl">
          Hover Me
        </button>
      </Magnetic>

      <Magnetic>
        <h1 className=" text-black [-webkit-text-stroke: 2px_black] hover:text-white hover:[-webkit-text-stroke: 1px ] text-4xl font-bold">Magnetic Text</h1>
      </Magnetic> */}

      <button data-cursor="hover" className="px-4 py-2 border">
        Hover Me
      </button>

      <a data-cursor="hover" href="#" className="text-blue-600">
        Link
      </a>


      <NewCursor />

    </div>
  );
}

export default App;
