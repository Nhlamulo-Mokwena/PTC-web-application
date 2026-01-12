import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AdminAddEventPage = () => {

  const [title,setTitle] = useState('');
  const [date,setDate] = useState('');
  const [description,setDescription] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();

    const eventData = {
      'title': title,
      'date': date,
      'description': description
    }

    try{
      const token = localStorage.getItem('jwtToken');
      const res = await axios.post('http://localhost:8081/api/add-event',
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      toast.success('Event is successfully added!');
      setTitle('');
      setDate('');
      setDescription('');
    }
    catch(error){
      console.log('failed to add event!');
      toast.error(error);
    }
  }

  return (
    <div className='p-2'>
      <h1 className='text-2xl uppercase font-semibold mb-7 mt-7 text-center'>
        Add-Events
      </h1>
      <div className='p-5 w-full m-auto md:w-160'>
        <form onSubmit={submitForm}>
          <div className='flex flex-col mb-4'>
            <label htmlFor="title">Event-Title: </label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='p-2 border-none bg-gray-200 rounded-2xl shadow'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="date">Event-Date: </label>
            <input 
              type="date" 
              name="date" 
              id="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='p-2 border-none bg-gray-200 rounded-2xl shadow'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="description">Event-Description: </label>
            <textarea 
              name="description" 
              id="description" 
              cols="6" 
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='p-2 border-none bg-gray-200 rounded-2xl shadow'
            >
            </textarea>
          </div>
          <div className='flex flex-col mb-4 mt-9'>
            <button 
              type="submit"
              className='p-2 text-center uppercase text-white bg-blue-500 hover:bg-blue-600
              hover:cursor-pointer rounded-lg'
            >
              Add-Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminAddEventPage