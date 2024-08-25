import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './context/Authcontext'


const App = () => {
  const {authUser} = useAuthContext();
  return (
  <>

 <div className="flex flex-col items-center justify-center mx-auto">
    <Routes>
      <Route path = '/' element ={authUser? <Home/>:<Navigate to ={'login'}/>}/>
      <Route path = '/login' element ={authUser ? <Navigate to = '/'/> :<Login/>}/>
      <Route path = '/signup' element ={authUser ? <Navigate to = '/'/> :<Signup/>}/>
    </Routes>
    <Toaster/>
 </div>
  
  </>
  )
}

export default App