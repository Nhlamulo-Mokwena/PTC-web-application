import {useState} from "react";
import ApplicantCard from "../components/ApplicantCard";
import { useEffect } from "react";
import axios from "axios";
import Loader from '../components/Loader'
import { toast } from "react-toastify";

const AdminApplicationsPage = () => {

  const [courseFilter, setCourseFilter] = useState("all-courses");
  const [applicationLoading,setApplicationLoading] = useState(true);
  const [applications,setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    const fetchData = async () => {
      try{
        const res = await axios.get('http://localhost:8081/api/applications',{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        });
        setApplications(res.data);
      }
      catch(error){
        toast.error(error);
        console.log(error)
      }
      finally{
        setApplicationLoading(false);
      }
    }
    fetchData();
  },[])
  return (
    <div className="bg-gray-50">
      <div className="bg-gray-200 p-5">
        <h1 className="text-2xl font-bold">Application Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Review and manage course applications
        </p>
      </div>
      <div className="w-full m-auto md:w-200">
        <div className="flex flex-col mt-6 p-10 bg-white shadow rounded-2xl">
          <select
            name="filter"
            id="filter"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="p-2 border bg-white border-gray-300 rounded-2xl"
          >
            <option value="all-courses">All Courses</option>
            <option value="admin">Admin</option>
            <option value="building">Building</option>
          </select>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-8 text-center mb-8">
            Applicants Information
          </h2>
          <div>
            {
              applicationLoading
              ?
              <Loader loading={applicationLoading}/>
              :
              <div>
                {applications.map((a) => (
                  <ApplicantCard application={a} key={a.id}/>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApplicationsPage;
