import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from "./Homepage.jsx"
import NavBar from './Navbar.jsx'
import Register from './Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    

    <>
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
  
}

export default App
