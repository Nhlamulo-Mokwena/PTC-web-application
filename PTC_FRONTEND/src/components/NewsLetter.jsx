import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCopyright, FaRegCopyright } from "react-icons/fa";


const NewsLetter = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');


  return (
    <div className="bg-light-blue p-16">
      <div className="flex justify-center items-center text-center">
        <section className="flex flex-col space-y-5">
          <h1 className="text-deep-green text-2xl font-bold">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-[17px]">
            Stay informed about new courses, events, and training opportunities.
          </p>
          <div className="w-full m-auto md:w-100 ">
            <form action="">
              <div className="flex flex-col space-y-5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="p-2 border border-gray-500 rounded-2xl"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="p-2 border border-gray-500 rounded-2xl"
                />
              </div>
              <button
                className="bg-gold-yellow p-2 mt-12 w-40 shadow rounded-lg font-medium
                hover:bg-amber-400 hover:cursor-pointer"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsLetter;
