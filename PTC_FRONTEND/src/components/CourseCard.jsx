import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = () => {
  return (
    <div className='bg-white p-5 rounded-lg shadow border-earthy-red border-l-4'>
      <div>
        <h1 className='text-2xl'>
          Course Name
        </h1>
        <p className='mb-5'>Course discription</p>
        <Link 
          className='bg-gold-yellow p-2 rounded-lg shadow hover:'
          to={'/courses/id'}
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default CourseCard