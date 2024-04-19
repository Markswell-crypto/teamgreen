import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Layout = () => {
  return (
    <div className='w-screen relative'>
      <Navbar/>
      <div className='md:pt-28'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout