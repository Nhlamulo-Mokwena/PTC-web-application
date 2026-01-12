import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import NewsLetter from '../components/NewsLetter'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../components/Loader'

const BlogPage = () => {

  const [blogs,setBlogs] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get('http://localhost:8081/api/blogs');
        setBlogs(res.data)
      }
      catch(error){
        console.log(error);
        toast.error('failed fetching data!')
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])

  return (
    <div className='bg-light-blue p-5'>
      <div>
        <h1 className='text-2xl text-center font-semibold mb-7'>
          News & Updates
        </h1>
        <div>
          {
            loading
            ?
            <Loader loading={loading}/>
            :
            <div className='grid gap-5 lg:grid-cols-3'>
             {
              blogs.map((b) => (
                <PostCard key={b.id} post={b}/>
              ))
             }
            </div>
          }
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default BlogPage