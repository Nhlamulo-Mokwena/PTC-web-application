import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'

const AdminHero = () => {

  const { id } = useParams();
  const [admin,setAdmin] = useState({});
  const [noOfApplications,setNoOfApplications] = useState(0);
  const [applicationLoading,setApplicationLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwtToken')
      console.log(token)
      try{
        const res = await axios.get(`http://localhost:8081/api/auth/${id}`,{
          headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        })
        setAdmin(res.data);
      }
      catch(error){
        toast.error('invalid id!')
        console.log(error)
      }
    }
    fetchData();
  },[id])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const token = localStorage.getItem('jwtToken');
        const res = await axios.get('http://localhost:8081/api/analytics/total-applications',{
          headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        });
        setNoOfApplications(res.data);
      }
      catch(error){
        console.log(error)
      }
      finally{
        setApplicationLoading(false);
      }
    }
    
    fetchData();
  },[])
  
  return (
    <div className="bg-gradient-blue text-white p-15 rounded-lg shadow-lg">
      <h1 className="text-3xl text-green-500 font-bold mb-2">Welcome back,{admin.name}</h1>
      <p className="text-green-500 mb-6">Here's what's happening with your platform today</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-deep-green p-6 rounded-lg">
          <p className="text-blue-200 text-sm">Total Students</p>
          <h3 className="text-2xl font-bold">1,234</h3>
        </div>
        
        <div className="bg-deep-green p-6 rounded-lg">
          <p className="text-blue-200 text-sm">Active Courses</p>
          <h3 className="text-2xl font-bold">24</h3>
        </div>
        
        <div className="bg-deep-green p-6 rounded-lg">
          <p className="text-blue-200 text-sm">Applications</p>
          {
            applicationLoading 
              ?
            <Loader loading={applicationLoading}/>
              :
            <h3 className="text-2xl font-bold">{noOfApplications}</h3>
          } 
        </div>
        
        <div className="bg-deep-green p-6 rounded-lg">
          <p className="text-blue-200 text-sm">Events</p>
          <h3 className="text-2xl font-bold">4</h3>
        </div>
      </div>
    </div>
  )
}

export default AdminHero