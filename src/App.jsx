import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './components/Home'
import About from './components/About'
import Booking from './components/Booking'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Login from './components/Login'
import Signup from './components/Signup'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/' index element={<Home/> }/>
          <Route path='/about' index element={<About/>}/>
          <Route path='/booking' index element={<Booking/>}/>
          <Route path='/team'  element={<Team/>}/>
          <Route path ='/about' element ={<About />} />
          <Route path ='/blog' element ={<Blog />} />
          <Route path ='/contact' element ={<Contact />} />
          <Route path ='/faq' element ={<Faq/>} />
          <Route path ='/login' element ={<Login/>} />
          <Route path ='/signup' element ={<Signup/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
