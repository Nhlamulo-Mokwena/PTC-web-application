import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

const AdminAddCoursePage = () => {

  const[courseName,setCourseName] = useState('');
  const[courseDesc,setCourseDesc] = useState('');
  const[faculty,setFaculty] = useState('Information Technology')
  const { id } = useParams();

  const submitForm = async (event) => {
    event.preventDefault();

    const course = {
      'courseName': courseName,
      'courseDescription': courseDesc,
      'faculty': faculty,
      'adminId': id
    }

    try{
      const token = localStorage.getItem('jwtToken');
      console.log(course)
      const res = await axios.post('http://localhost:8081/api/add-course',
        course,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        }
      )
      
      toast.success('Course successfully added!');
      setCourseDesc('')
      setCourseName('')
      setFaculty('Information Technology');
    }
    catch(error){
      toast.error(error)
    }
  }

  return (
    <div className='p-5'>
      <div className='w-full m-auto p-5 md:w-150'>
        <h1 className='text-2xl text-center uppercase font-semibold mt-7 mb-8'>
          Add-Course
        </h1>
        <form onSubmit={submitForm}>
          <div className='flex flex-col mb-4'>
            <label htmlFor="courseName" className='mb-2 font-semibold'>
              Course-Name: 
            </label>
            <input 
              type="text" 
              name="courseName" 
              id="courseName" 
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className='border-none p-5 bg-gray-200 shadow rounded-2xl'
              required
              placeholder='Course Name...'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="faculty" className='mb-2 font-semibold'>
              Faculty: 
            </label>
            <select 
              name="faculty" 
              id="faculty"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className='p-5 bg-gray-200 rounded-2xl shadow'
            >
              <option value="Information Technology">Information Technology</option>
              <option value="Business & Management">Business & Management</option>
              <option value="Administrative Training">Administrative Training</option>
              <option value="Municipal & LED">Municipal & LED</option>
              <option value="ABET">ABET (Adult Education)</option>
            </select>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="courseDesc" className='mb-2 font-semibold'>
              Course-Description: 
            </label>
            <textarea 
              name="courseDesc" 
              id="courseDesc"
              value={courseDesc}
              onChange={(e) => setCourseDesc(e.target.value)}
              rows={6}
              cols={8}
              className='border-none p-5 bg-gray-200 shadow rounded-2xl'
              placeholder='Course Description...'
            >
            </textarea>
          </div>
          <div className='flex flex-col mt-12 mb-8'>
            <button 
              type="submit"
              className='p-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600'
            >
              Add-Course
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminAddCoursePage