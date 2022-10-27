import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logo from "../../../images/lang.png";
import SideNav from "../../sideNav/SideNav";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full bg-slate-300 lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src={logo} alt="Brand Logo" className="w-[7vh]" />
          <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">
            Course Platform
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/home"
              aria-label="Our Home"
              title="Our Home"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              aria-label="Our Courses"
              title="Our Courses"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About us
            </NavLink>
          </li>
          <button>
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer"
            >
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" />
                <div className="w-10 h-6 rounded-full shadow-inner bg-slate-200 peer-checked:bg-violet-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
              </span>
            </label>
          </button>
        </ul>
        <ul className="items-center hidden space-x-8 lg:flex">
          {user && user.uid ? (
            <>
              {user?.photoURL ? (
                <Link to="/profile">
                  <img
                    title={user.displayName}
                    alt=""
                    src={user.photoURL}
                    className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500"
                  />
                </Link>
              ) : (
                <HiUserCircle
                  title={user.displayName}
                  className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500"
                />
              )}
              <li>
                <button
                  onClick={() => logOut()}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Log Out"
                  title="Log Out"
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Register"
                  title="Register"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Login"
                  title="Login"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img src={logo} alt="Brand Logo" className="w-[7vh]" />
                      <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">
                        Course Platform
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Our Home"
                        title="Our Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="Our Courses"
                        title="Our Courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200  bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Login"
                        title="Login"
                      >
                        Login
                      </Link>
                    </li>
                    <div>
                      <SideNav />
                    </div>
                    <button>
                      <label
                        htmlFor="Toggle1"
                        className="inline-flex items-center space-x-4 cursor-pointer"
                      >
                        <span className="relative">
                          <input
                            id="Toggle1"
                            type="checkbox"
                            className="hidden peer"
                          />
                          <div className="w-10 h-6 rounded-full shadow-inner bg-slate-200 peer-checked:bg-violet-400"></div>
                          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                      </label>
                    </button>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
