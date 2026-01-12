import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminAddTestimonialPage = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const tetsimoniData = {
      message: message,
      name: name,
      position: position,
    };

    try{
      const token = localStorage.getItem('jwtToken')
      const res = await axios.post('http://localhost:8081/api/add-testimoni',
        tetsimoniData,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      toast.success('Testimoni is successfully posted!')
      setMessage('');
      setName('');
      setPosition('');
    }
    catch(error){
      console.log('failed to post testimoni')
      toast.error(error);
    }
  };

  return (
    <div className="p-5">
      <div>
        <h1 className="text-center uppercase text-2xl">Add testimonial</h1>
        <div className="w-full p-5 m-auto md:w-150">
          <form onSubmit={submitForm}>
            <div className="flex flex-col mb-4">
              <label htmlFor="testimonialMessage" className="mb-2">
                Testimonial Message:
              </label>
              <textarea
                name="testimonialMessage"
                id="testimonialMessage"
                className="border-none bg-gray-200 p-2 shadow rounded-2xl"
                cols={6}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="testemoniName">Name: </label>
              <input
                type="text"
                name="testemoniName"
                id="testemoniName"
                className="p-2 border-none bg-gray-200 shadow rounded-2xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="testemoniPosition">Position: </label>
              <input
                type="text"
                name="testemoniPosition"
                id="testemoniPosition"
                className="p-2 border-none bg-gray-200 shadow rounded-2xl"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4 mt-7">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg
                hover:bg-blue-600 hover:cursor-pointer"
              >
                Add Testimoni
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddTestimonialPage;
