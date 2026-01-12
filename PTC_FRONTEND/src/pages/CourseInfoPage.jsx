import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const CourseInfoPage = () => {

  const { id } = useParams();

  return (
    <div className='bg-light-blue p-5'>
      <div className='bg-deep-green flex items-center p-5 w-20 rounded-2xl'>
        <Link
          to={'/courses'}
        >
          <FaArrowLeft size={27} color='white'/>
        </Link>
      </div>
      <div className='p-5'>
        <h1 className='text-2xl font-semibold text-center mt-7'>
          Course Name
        </h1>
        <p>
          Course description
        </p>
      </div>
    </div>
  )
}

export default CourseInfoPage