import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Students from '../pages/Students'
import Contact from '../pages/Contact'
import Edit from '../pages/Edit'
import Add from '../pages/Add'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/add' element={<Add/>}/>
    </Routes>
  )
}

export default Routing