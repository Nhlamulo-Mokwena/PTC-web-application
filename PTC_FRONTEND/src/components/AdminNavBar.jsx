import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminNavBar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-deep-green p-2 rounded-lg text-white hv:bg-green-600"
      : "p-2 rounded-lg hover:bg-gray-200";

  const [isOpen, setIsOpen] = useState(false);
  const [admin, setAdmin] = useState({});

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const logoutFun =  () => {
    navigate("/");
  };

  return (
    <div className="bg-light-blue p-5">
      {/* desktop navigation */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center">
          <h1
            className="text-2xl text-shadow-deep-green text-deep-green
          font-bold"
          >
            PTC-ADMIN
          </h1>
          <div className="flex space-x-9">
            <NavLink to={`/admin/${id}`} className={activeLink}>
              Home
            </NavLink>
            <NavLink to={`/admin/applications/${id}`} className={activeLink}>
              Applications
            </NavLink>
            <NavLink to={`/admin/add-course/${id}`} className={activeLink}>
              Add Courses
            </NavLink>
            <NavLink to={`/admin/add-blog/${id}`} className={activeLink}>
              Post Blogs
            </NavLink>
            <NavLink to={`/admin/add-testimonial/${id}`} className={activeLink}>
              Post Testimonials
            </NavLink>
            <NavLink to={`/admin/add-event/${id}`} className={activeLink}>
              Post Events
            </NavLink>
            <button onClick={logoutFun}>
              <NavLink to={"/admin/logout"} className={activeLink}>
                Logout
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="block lg:hidden">
        <div className="flex justify-end">
          <button className="text-deep-green" onClick={toggleButton}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div>
          {isOpen ? (
            <>
              <div
                className="fixed right-0 top-0 bg-white w-64 shadow-lg z-50 min-h-screen
               transform transition-transform duration-100 ease-in-out flex flex-col"
              >
                <div className="flex items-center justify-between p-4 border-b flex-shrink-0 text-deep-green">
                  <h2 className="text-xl font-bold text-deep-green">Menu</h2>
                  <button
                    onClick={toggleButton}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                <div className="flex flex-col space-y-3 text-center mt-7 p-5 overflow-y-auto">
                  <NavLink to={`/admin/${id}`} className={activeLink}>
                    Home
                  </NavLink>
                  <NavLink
                    to={`/admin/applications/${id}`}
                    className={activeLink}
                  >
                    Applications
                  </NavLink>
                  <NavLink
                    to={`/admin/add-course/${id}`}
                    className={activeLink}
                  >
                    Add Courses
                  </NavLink>
                  <NavLink to={`/admin/add-blog/${id}`} className={activeLink}>
                    Post Blogs
                  </NavLink>
                  <NavLink
                    to={`/admin/add-testimonial/${id}`}
                    className={activeLink}
                  >
                    Post Testimonials
                  </NavLink>
                  <NavLink to={`/admin/add-event/${id}`} className={activeLink}>
                    Post Events
                  </NavLink>
                  <button onClick={logoutFun}>
                    <NavLink to={"/admin/logout"} className={activeLink}>
                      Logout
                    </NavLink>
                  </button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
