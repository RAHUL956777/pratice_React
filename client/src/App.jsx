import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from "./components/Home/Home"
import Navbar from './components/Nav/Navbar'

const App = () => {
  return (
    <div className='App'>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
