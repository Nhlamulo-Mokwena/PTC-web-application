import React from 'react'
import CourseCard from '../components/CourseCard'

const CoursesPage = () => {
  return (
    <div className='bg-light-blue p-5'>
      <h1 className='mt-5 text-3xl font-bold text-center'>
        Our Courses
      </h1>
      <h3 className='text-2xl border-b-2 w-64 mt-9 border-earthy-red shadow '>
        Information Technology
      </h3>
      <section className='grid lg:grid-cols-2 gap-5 mt-7'>
        <CourseCard/>
        <CourseCard/>
      </section>

      {/* courses */}
      <h3 className='text-2xl border-b-2 w-67 mt-9 border-earthy-red shadow '>
        Business & Management
      </h3>
      <section className='grid lg:grid-cols-2 gap-5 mt-7'>
        <CourseCard/>
        <CourseCard/>
      </section>

      {/* courses */}
      <h3 className='text-2xl border-b-2 w-67 mt-9 border-earthy-red shadow '>
        Administrative Training
      </h3>
      <section className='grid lg:grid-cols-2 gap-5 mt-7'>
        <CourseCard/>
      </section>

      {/* courses */}
      <h3 className='text-2xl border-b-2 w-48 mt-9 border-earthy-red shadow '>
        Municipal & LED
      </h3>
      <section className='grid lg:grid-cols-2 gap-5 mt-7'>
        <CourseCard/>
        <CourseCard/>
      </section>

      {/* courses */}
      <h3 className='text-2xl border-b-2 w-67 mt-9 border-earthy-red shadow '>
        ABET (Adult Education)
      </h3>
      <section className='grid lg:grid-cols-2 gap-5 mt-7'>
        <CourseCard/>
      </section>

    </div>
  )
}

export default CoursesPage