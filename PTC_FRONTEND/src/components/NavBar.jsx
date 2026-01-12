import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtonFun = () => {
    setIsOpen(!isOpen);
  };

  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-deep-green p-2 rounded-lg text-white hv:bg-green-600"
      : "p-2 rounded-lg hover:bg-gray-200";

  return (
    <div className="bg-light-blue  text-deep-green pl-3 pr-4">
      {/* desktop navigation */}
      <section className="hidden lg:block">
        <div className="flex p-3 items-center justify-between">
          <div className="hidden xl:block">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-70" />
            </Link>
          </div>
          <div className="flex space-x-5">
            <NavLink to={"/"} className={activeLink}>
              Home
            </NavLink>
            <NavLink to={"/about"} className={activeLink}>
              About
            </NavLink>
            <NavLink to={"/courses"} className={activeLink}>
              Courses
            </NavLink>
            <NavLink to={"/apply"} className={activeLink}>
              Apply
            </NavLink>
            <NavLink to={"/gallery"} className={activeLink}>
              Gallery
            </NavLink>
            <NavLink to={"/services"} className={activeLink}>
              Services
            </NavLink>
            <NavLink to={"/blog"} className={activeLink}>
              Blog
            </NavLink>
            <NavLink to={"/testimonials"} className={activeLink}>
              Testimonials
            </NavLink>
            <NavLink to={"/events"} className={activeLink}>
              Events
            </NavLink>
            <NavLink to={"/contact"} className={activeLink}>
              Contact
            </NavLink>
            <NavLink to={"/portal"} className={activeLink}>
              Portal
            </NavLink>
          </div>
        </div>
      </section>

      {/* mobile navigation */}
      <section className="block lg:hidden">
        <div className="bg-light-blue p-5">
          <div className="flex justify-end">
            {isOpen ? (
              <button onClick={toggleButtonFun}>
                <FaTimes size={40} />
              </button>
            ) : (
              <button onClick={toggleButtonFun}>
                <FaBars size={40} />
              </button>
            )}
          </div>
          <div>
            {isOpen ? (
              <>
                <div
                  className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50
                  transform transition-transform duration-100 ease-in-out flex flex-col"
                >
                  <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                    <button
                      onClick={toggleButtonFun}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-3 text-center mt-7 p-5 overflow-y-auto">
                    <NavLink to={"/"} className={activeLink}>
                      Home
                    </NavLink>
                    <NavLink to={"/about"} className={activeLink}>
                      About
                    </NavLink>
                    <NavLink to={"/courses"} className={activeLink}>
                      Courses
                    </NavLink>
                    <NavLink to={"/apply"} className={activeLink}>
                      Apply
                    </NavLink>
                    <NavLink to={"/gallery"} className={activeLink}>
                      Gallery
                    </NavLink>
                    <NavLink to={"/services"} className={activeLink}>
                      Services
                    </NavLink>
                    <NavLink to={"/blog"} className={activeLink}>
                      Blog
                    </NavLink>
                    <NavLink to={"/testimonials"} className={activeLink}>
                      Testimonials
                    </NavLink>
                    <NavLink to={"/events"} className={activeLink}>
                      Events
                    </NavLink>
                    <NavLink to={"/contact"} className={activeLink}>
                      Contact
                    </NavLink>
                    <NavLink to={"/portal"} className={activeLink}>
                      Portal
                    </NavLink>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
