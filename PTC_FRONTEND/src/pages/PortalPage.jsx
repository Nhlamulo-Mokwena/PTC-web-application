import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PortalPage = () => {
  const [buttonHolder, setButtonHolder] = useState("Student");
  const [userIdHolder, setUserIdHolder] = useState("Student ID");
  const [Studentcolour, setStudentColour] = useState("deep-green");
  const [StaffColour, setStaffColour] = useState("gold-yellow");
  const [isStudent, setIsStudent] = useState(true);

  const [emailOrID, setEmailOrID] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState({});

  const navigate = useNavigate();

  const changeToStudent = () => {
    setIsStudent(true);
    setUserIdHolder("Student ID");
    setButtonHolder("Student");
    setStudentColour("deep-green");
    setStaffColour("gold-yellow");
  };

  const changeToStuff = () => {
    setIsStudent(false);
    setUserIdHolder("Staff ID");
    setButtonHolder("Staff");
    setStudentColour("gold-yellow");
    setStaffColour("deep-green");
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (isStudent === true) {
      console.log("student login");
    } else {
      const data = {
        username: emailOrID,
        password: password,
      };

      try {
        const res = await axios.post(
          "http://localhost:8081/api/auth/login",
          data
        );
        const token = res.data;
        localStorage.setItem("jwtToken", token);

        console.log(token);
        toast.success("Admin Successfully logged in!");

        try {
          const token = localStorage.getItem("jwtToken");
          console.log("Token being sent:", token);
          console.log("Fetching admin with username:", emailOrID);
          const response = await axios.get(
            `http://localhost:8081/api/auth/admin/${emailOrID}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          setAdmin(response.data);
          navigate(`/admin/${response.data.id}`);
        } catch (error) {
          toast.error("invalid admin username");
        }
      } catch (error) {
        toast.error("Invalid login credentials!");
      }
    }
  };

  return (
    <div className="bg-light-blue p-5 md:pb-20">
      <div className="bg-white shadow rounded-lg w-full m-auto p-5 md:w-130">
        <h1 className="text-2xl text-center font-semibold">Login Form</h1>
        <form onSubmit={submitForm}>
          <div className="grid grid-cols-2 mt-7 mb-5">
            <button
              type="button"
              className={`bg-${Studentcolour} p-2 text-center`}
              onClick={changeToStudent}
            >
              Student
            </button>
            <button
              type="button"
              className={`bg-${StaffColour} p-2 text-center`}
              onClick={changeToStuff}
            >
              Staff
            </button>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="id">Email or {userIdHolder}: </label>
            <input
              type="text"
              name="id"
              id="id"
              value={emailOrID}
              onChange={(e) => setEmailOrID(e.target.value)}
              className="p-2 border border-gray-400 rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-400 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-9 mb-5">
            <button type="submit" className="p-2 bg-gold-yellow">
              Login as {buttonHolder}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortalPage;
