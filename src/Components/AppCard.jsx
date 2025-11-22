import { Bold, Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link } from 'react-router';

const AppCard = ({ id, image, title, downloads, ratingAvg }) => {  
    return (
        <Link to={`/app-details/${id}`} className='w-80 h-[420px] flex flex-col justify-between p-4 rounded-sm bg-white'>
            <img className='rounded-lg' src={image} alt={title} />
            <h1 className='text-xl font-medium'>{title}</h1>
            <div className='flex justify-between'>
                <div className='flex bg-[#f1f5e8] btn'>
                    <HiOutlineDownload size={16} color='#1ed79b'/>
                    <p className='text-[#1ed79b]'>{downloads}</p>
                </div>
                <div className='flex bg-[#fff0e1] btn'>
                    <FaStar size={16} color='#FF8811' />
                    <p className='text-[#FF8811]'>{ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;