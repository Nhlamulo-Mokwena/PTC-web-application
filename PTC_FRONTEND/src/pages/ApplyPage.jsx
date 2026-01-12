import React, { useState } from "react";
import NewsLetter from "../components/NewsLetter";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Loader from "../components/Loader";

const ApplyPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [contact, setContact] = useState("");
  const [course, setCourse] = useState("Microsoft Office Specialist");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [idUpload, setIdUpload] = useState(null);
  const [resultsUpload, setResultsUpload] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/courses");
        setCourses(res.data);
        setCourse(res.data[0].courseName);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const submitForm = async (event) => {
    event.preventDefault();

    const application = {
      applicantNames: name,
      applicantIdOrPassportNo: id,
      email: email,
      contact: contact,
      course: course,
      highestQualification: grade,
      institutionName: school,
    };

    const data = new FormData();

    data.append("idFile", idUpload);
    data.append("resultsFile", resultsUpload);

    data.append(
      "application",
      new Blob([JSON.stringify(application)], {
        type: "application/json",
      })
    );

    try {
      const res = await axios.post(
        "http://localhost:8081/api/application",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        //Reset form
        setName("");
        setEmail("");
        setId("");
        setContact("");
        setCourse(courses[0].data.courseName);
        setGrade("");
        setSchool("");
        setIdUpload(null);
        setResultsUpload(null);

        document.getElementById("id_upload").value = "";
        document.getElementById("results").value = "";

        toast.success("Application successfully submitted!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="bg-light-blue p-5">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="bg-white shadow p-9 w-full m-auto lg:w-180">
          <h1 className="text-center font-semibold text-2xl p-5">
            Apply Online
          </h1>
          <form onSubmit={submitForm}>
            <fieldset className="border border-earthy-red p-5 rounded-lg mb-5">
              <legend>Personal Details</legend>
              <div className="flex flex-col space-y-1.5 mb-4">
                <label htmlFor="name">Full Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-1.5 mb-4">
                <label htmlFor="id">ID or Passport Number:</label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  required
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-1.5 mb-4">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="contact">Phone Number:</label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
            </fieldset>
            <fieldset className="border border-earthy-red p-5 rounded-lg mb-5">
              <legend>Course Selection</legend>
              <div>
                <label htmlFor="course"></label>
                <select
                  name="course"
                  id="course"
                  className="p-2 border rounded-lg"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  {
                    courses.map((c) => (
                      <option key={c.id} value={c.courseName}>{c.courseName}</option>
                    ))
                  }
                </select>
              </div>
            </fieldset>
            <fieldset className="border border-earthy-red p-5 rounded-lg mb-5 ">
              <legend>Education Background</legend>
              <div className="flex flex-col space-x-1.5 mb-4">
                <label htmlFor="grade">Highest Grade Or Qualification: </label>
                <input
                  type="text"
                  name="grade"
                  id="grade"
                  required
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-x-1.5 mb-4">
                <label htmlFor="school">
                  Last School or Institution Attended:{" "}
                </label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  required
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
            </fieldset>
            <fieldset className="border border-earthy-red p-5 rounded-lg mb-8">
              <legend>Upload Documents</legend>
              <div className="flex flex-col space-y-1.5 mb-4 w-60 lg:w-100">
                <label htmlFor="id_upload">Upload ID/Passport: </label>
                <input
                  type="file"
                  name="id_upload"
                  id="id_upload"
                  required
                  onChange={(e) => setIdUpload(e.target.files[0])}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-1.5 mb-4 w-60 lg:w-100">
                <label htmlFor="results">Upload Latest Results:, </label>
                <input
                  type="file"
                  name="results"
                  id="results"
                  required
                  onChange={(e) => setResultsUpload(e.target.files[0])}
                  className="p-2 border border-gray-400 rounded-lg"
                />
              </div>
            </fieldset>
            <div className="flex flex-col  items-center justify-center text-center mb-4">
              <input
                type="checkbox"
                name="disclaimer"
                id="disclaimer"
                required
              />
              <label htmlFor="disclaimer">
                I declare that the above information is correct and I consent to
                Pulakgadi storing my data.
              </label>
            </div>
            <div className="flex flex-col mt-9 mb-7">
              <button
                type="submit"
                className="bg-gold-yellow p-2 rounded-lg hover:cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      )}
      <NewsLetter />
    </div>
  );
};

export default ApplyPage;
