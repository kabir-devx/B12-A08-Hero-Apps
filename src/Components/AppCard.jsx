import { Bold, Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link } from 'react-router';

const AppCard = ({ id, image, title, downloads, ratingAvg }) => {
    return (
        <Link to={`/app-details/${id}`} className='w-[348px] h-[435px] flex flex-col justify-between p-4 rounded-sm bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border hover:border-[#632EE3]/30'>
            <div className="overflow-hidden rounded-lg">
                <img
                    className="w-full transition-transform duration-300 rounded-lg hover:scale-105"
                    src={image}
                    alt={title}
                />
            </div>
            <h1 className='text-xl font-medium'>{title}</h1>
            <div className='flex justify-between'>
                <div className='flex bg-[#f1f5e8] btn'>
                    <HiOutlineDownload size={16} color='#1ed79b' />
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