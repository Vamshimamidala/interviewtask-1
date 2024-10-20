 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sigup from './Componments/Sigup'
import Hero from './Componments/Hero'
import Feauter from './Componments/Feauter'
import Register from './Componments/Register'
import Adimregister from './Admin/Adminregister'
import Adimlogin from './Admin/Adminlogin'
import Admindashboard from './Admin/Admindashboard'
import EditLogin from './Admin/EditLogin'
import Addfeature from './Admin/Adminfeature'
 
 


const Routing = () => {
  return (
    <>
    <Routes>
       
    <Route path="/" element={<Hero/>} />
    <Route path="/features" element={<Feauter/>} />
       <Route path="/signup" element={<Sigup/>} />
       <Route path='/admin' element={<Adimlogin/>}/>
       <Route path="/register" element={<Register/>} />
       <Route path='/adminregister' element={<Adimregister/>}/>
       <Route path='/adimdashboard' element={<Admindashboard/>}>
       <Route path='login' element={<EditLogin/>}/>
       <Route path='Adminfeature' element={<Addfeature/>}/>
       </Route>
       </Routes>
    </>
  )
}

export default Routing
 