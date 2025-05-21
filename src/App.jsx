import React from 'react'
import Home from './Pages/Home'
import ErorPage from './Pages/ErorPage'
import {BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/eror' element={<ErorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App