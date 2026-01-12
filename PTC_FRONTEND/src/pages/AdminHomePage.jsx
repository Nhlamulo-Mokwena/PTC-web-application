import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import AdminHero from '../components/AdminHero'

const AdminHomePage = () => {
  return (
    <div>
      <AdminHero/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default AdminHomePage