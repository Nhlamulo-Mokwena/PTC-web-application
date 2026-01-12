import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const AboutUsPage = () => {
  return (
    <div className='bg-light-blue p-5'>
      <div className='mb-9 mt-5'>
        <h1 className='text-2xl font-bold mb-4'>
          About Us
        </h1>
        <p>
          Pulakgadi Training Consulting is a 100% black-owned 
          company founded in the Lejweleputswa District (Free State Province) 
          and located in Welkom (Matjhabeng). Established in 2006 as a Close 
          Corporation (CC) and converted to a (PTY) Ltd in 2012 to comply with 
          the Department of Education requirements, the company is owned by two 
          members with over 15 years of combined experience in Skills Development 
          and Human Resources Development.
        </p>
      </div>
      <div className='mb-9'>
        <h1 className='text-2xl font-bold mb-4'>
          Our Focus Areas
        </h1>
        <ul className='pl-5 list-disc'>
          <li>Information Technology Training</li>
          <li>Adult Basic Education and Training(ABET)</li>
          <li>Administrative Courses</li>
          <li>Management Courses</li>
          <li>Business Courses</li>
          <li>Local Economic Development</li>
          <li>Municipal Integrated Developement Planning</li>
          <li>Municipal Finance and Administration</li>
        </ul>
      </div>
      <div className='mb-9'>
        <h1 className='text-2xl font-bold mb-4'>
          Authorized Testing Center
        </h1>
        <p className='mb-3 font-semibold'>
          We are an authorized testing center for:
        </p>
        <ul className='pl-5 list-disc'>
          <li>Microsoft Courses (Office Specialist, IT Pro, Developer and Database, System Administration)</li>
          <li>Entrepreneurship and Small Business (ESB)</li>
          <li>Internet and Computing Core Certification (IC3)</li>
          <li>Adobe</li>
          <li>Autodesk</li>
        </ul>
      </div>
      <div className='mb-9'>
        <h1 className='text-2xl font-bold mb-4'>
          Our Objective
        </h1>
        <p>
          Our objective is to contribute to the development of responsible,
          independent, empowered, and critical-thinking citizens by creating
          real work and business opportunities that enhance the quality of life
          for our clients.
        </p>
      </div>
      <div className='mb-9'>
        <h1 className='text-2xl font-bold mb-4'>Our Team</h1>
        <p>
          Our team comprises qualified, experienced, and competent Skills Development
          Facilitators, Assessors, and Moderators who deliver quality teaching in
          accordance with the requirements of SAQA and other relevant bodies.
        </p>
      </div>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Our Branches</h1>
       <ul className='pl-5 list-disc'>
        <li>Welkom</li>
       </ul>
      </div>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default AboutUsPage