import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      <Navbar/>
      <main className='my-4'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App