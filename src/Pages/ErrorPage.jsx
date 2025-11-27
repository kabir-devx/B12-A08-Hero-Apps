import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-6 mt-20 mb-10'>
            <img src="/error-404.png" alt="" />
            <h1 className='text-5xl font-semibold'>Oops, page not found!</h1>
            <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
            <Link to='/' className='btn btn-lg mt-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;