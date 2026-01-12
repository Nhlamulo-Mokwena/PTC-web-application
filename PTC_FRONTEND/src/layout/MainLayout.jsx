import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <ToastContainer/>
    </div>
  )
}

export default MainLayout