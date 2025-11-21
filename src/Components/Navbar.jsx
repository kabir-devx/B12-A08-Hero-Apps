import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className=" shadow-sm">
            <div className='navbar max-w-11/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to='apps'>Apps</Link></li>
                            <li><Link to='installation'>Installation</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="/logo.png" alt="HERO.IO logo" className='w-10 h-10 mr-2' />
                        <Link to='/' className="font-bold text-lg mt-0.5">HERO.IO</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='apps'>Apps</Link></li>
                        <li><Link to='installation'>Installation</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center btn'>
                        <IoLogoGithub size={20} />
                        <Link to='https://github.com/kabir-devx' target="_blank">Contribute</Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;