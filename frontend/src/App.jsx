import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  return (
  <>

 <div className="flex flex-col items-center justify-center mx-auto">
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/login' element ={<Login/>}/>
      <Route path = '/signup' element ={<Signup/>}/>
    </Routes>
    <Toaster/>
 </div>
  
  </>
  )
}

export default App