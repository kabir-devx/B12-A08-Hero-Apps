import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
   const activeClass = ({ isActive }) =>
      isActive
         ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] " +
         "after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:rounded-full"
         : "";

   return (

      <div className="navbar shadow-sm">
         <div className="max-w-11/12 flex w-full justify-between mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {" "}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                     </svg>
                  </div>
                  <ul
                     tabIndex="-1"
                     className="menu menu-sm dropdown-content font-semibold  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                     <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                     <li><NavLink to="/apps" className={activeClass}>Apps</NavLink></li>
                     <li><NavLink to="/installation" className={activeClass}>Installation</NavLink></li>
                  </ul>
               </div>
               <div className="flex items-center">
                  <img
                     src="/logo.png"
                     alt="HERO.IO logo"
                     className="w-10 h-10 mr-2"
                  />
                  <Link to="/" className="font-bold text-lg mt-0.5">
                     HERO.IO
                  </Link>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal font-semibold">
                  <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                  <li><NavLink to="/apps" className={activeClass}>Apps</NavLink></li>
                  <li><NavLink to="/installation" className={activeClass}>Installation</NavLink></li>
               </ul>
            </div>
            <div className="navbar-end">
               <div className="flex items-center btn">
                  <IoLogoGithub size={20} />
                  <Link to="https://github.com/kabir-devx" target="_blank">
                     Contribute
                  </Link>
               </div>
            </div>
         </div>
      </div>

   );
};

export default Navbar;
