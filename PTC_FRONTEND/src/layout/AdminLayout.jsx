import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavBar from '../components/AdminNavBar'
import { ToastContainer } from 'react-toastify'

const AdminLayout = () => {
  return (
    <div>
      <AdminNavBar/>
      <Outlet/>
      <ToastContainer/>
    </div>
  )
}

export default AdminLayout