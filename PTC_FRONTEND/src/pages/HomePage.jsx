import React from 'react'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
    <Hero/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default HomePage