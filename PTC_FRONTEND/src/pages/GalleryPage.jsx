import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Loader from '../components/Loader';
import NewsLetter from '../components/NewsLetter'

const GalleryPage = () => {

  const [loading,setLoading] = useState(true);
  const [images,setImages] = useState([]);

  useEffect(() => {
    const fetchData =  async () => {
      try{
        const res = await axios.get("http://localhost:8081/api/images");
        setImages(res.data);
      }
      catch(error){
        console.log(error)
      }
    };

    fetchData();
  },[])

  return (
    <div className='bg-light-blue p-5'>
      <div>
        <h1 className='text-3xl font-semibold text-center mb-7'>
          Campus Life & Events
        </h1>
      {
        loading
         ?
          <Loader loading={loading}/>
          :
          <div>
          </div>
      }
      </div>
      <NewsLetter/>
    </div>
  )
}

export default GalleryPage