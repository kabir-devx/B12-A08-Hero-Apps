import { IoLogoGithub } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
   const activeClass = ({ isActive }) =>
      isActive
         ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] " +
         "after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:rounded-full"
         : "";

   return (

      <div className="bg-white shadow-sm navbar">
         <div className="flex justify-between w-full mx-auto max-w-10/12">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
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
                     className="p-2 mt-3 font-semibold shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
                  >
                     <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                     <li><NavLink to="/apps" className={activeClass}>Apps</NavLink></li>
                     <li><NavLink to="/installation" className={activeClass}>My Installation</NavLink></li>
                  </ul>
               </div>
               <Link to="/" className="flex items-center">
                  <img
                     src="/logo.png"
                     alt="HERO.IO logo"
                     className="w-10 h-10 mr-2"
                  />
                  <h1 className="font-bold text-lg mt-0.5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                     HERO.IO
                  </h1>
               </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
               <ul className="font-semibold menu menu-horizontal">
                  <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                  <li><NavLink to="/apps" className={activeClass}>Apps</NavLink></li>
                  <li><NavLink to="/installation" className={activeClass}>My Installation</NavLink></li>
               </ul>
            </div>
            <div className="navbar-end">
               <Link
                  to="https://github.com/kabir-devx"
                  target="_blank"
                  className="relative flex items-center gap-2 px-5 py-3 rounded-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
               >
                  <IoLogoGithub size={20} />
                  <span>Contribute</span>
               </Link>

            </div>
         </div>
      </div>

   );
};

export default Navbar;
