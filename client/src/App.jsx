import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './Register/Register'
import Login from './Login/Login'
import Home from "./Home/Home"
import Navbar from './Nav/Navbar'

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
