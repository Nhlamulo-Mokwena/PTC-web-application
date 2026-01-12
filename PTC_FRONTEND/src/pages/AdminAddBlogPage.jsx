import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AdminAddBlogPage = () => {

  const [blogTitle,setBlogTitle] = useState('');
  const [blogDesc,setBlogDesc] = useState('');
  const [imageFile,setImageFile] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    const blogDto = {
      'blogTitle': blogTitle,
      'blogDescription': blogDesc
    }

    const data = new FormData();

    data.append('imageFile',imageFile)
    
    data.append('blogDto',
      new Blob([JSON.stringify(blogDto)],{
        type: 'application/json'
      })
    );

    try{
      const token = localStorage.getItem('jwtToken');
      const res = await axios.post('http://localhost:8081/api/add-blog',
        data,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      );
      setBlogTitle('');
      setBlogDesc('');
      setImage(null);
      toast.success('blog successfully posted!');

    }
    catch(error){
      console.log(error.message())
      toast.error('failed to post blog data');
    }

  }

  return (
    <div className='p-5'>
      <div className='w-full m-auto p-5 md:w-160'>
        <h1 className='text-2xl text-center font-semibold uppercase mb-9 mt-8'>
          Add Blog-Post
        </h1>
        <form onSubmit={submitForm}>
          <div className='flex flex-col mb-4'>
            <label htmlFor="blogTitle" className='mb-2 font-semibold'>Blog-Title: </label>
            <input 
              type="text" 
              name="blogTitle" 
              id="blogTitle" 
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              className='p-4 border-none bg-gray-200 rounded-2xl shadow'
              placeholder='Enter Blog-Title...'
            />
          </div>
           <div className='flex flex-col mb-4'>
            <label htmlFor="blogDesc" className='mb-2 font-semibold'>Blog-Description: </label>
            <textarea 
              name="blogDesc" 
              id="blogDesc" 
              cols="6" 
              rows="8"
              value={blogDesc}
              onChange={(e) => setBlogDesc(e.target.value)}
              placeholder='Enter Blog-Descritption...'
              className='p-2 border-none bg-gray-200 rounded-2xl shadow'
            >
            </textarea>
          </div>
           <div className='flex flex-col mb-4'>
            <label htmlFor="blogImg" className='mb-2 font-semibold'>Blog-Image: </label>
            <input 
              type="file" 
              name="blogImg" 
              id="blogImg" 
              className='p-2 bg-gray-200 rounded-2xl'
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
          <div className='flex flex-col mb-8 mt-12'>
            <button 
              type="submit"
              className='bg-blue-500 p-2 text-white rounded-lg shadow 
              hover:bg-blue-600 hover:cursor-pointer'
            >
              POST BLOG
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminAddBlogPage