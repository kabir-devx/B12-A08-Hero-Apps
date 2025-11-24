import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import { FaStar } from 'react-icons/fa';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import Recharts from '../Components/Recharts';

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading = [] } = useData()
    const app = apps.find(p => String(p.id) === id);
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {}
    const formatDownloads = (downloads) => {
        if (downloads >= 1000000000)
            return (downloads / 1000000000).toFixed(0) + "B";
        if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + "M";
        if (downloads >= 1000) return (downloads / 1000).toFixed(0) + "K";
        return downloads;
    }
    const formatReviews = (reviews) => {
        if (reviews >= 1000000000)
            return (downloads / 1000000000).toFixed(0) + "B";
        if (reviews >= 1000000) return (reviews / 1000000).toFixed(0) + "M";
        if (reviews >= 1000) return (reviews / 1000).toFixed(0) + "K";
        return reviews;
    }
    return (
        <div>
            <div className="bg-[#f5f5f5] flex max-w-10/12 mt-20 mx-auto">
                <figure className='w-[350px] h-[350px]'>
                    <img className='w-full rounded-sm'
                        src={image}
                        alt={title} />
                </figure>
                <div className="flex flex-col gap-6 ml-10 w-7xl">
                    <div>
                        <h2 className="text-[32px] font-bold">{title}</h2>
                        <p className='text-[#627382] text-xl'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                    </div>
                    <hr />

                    <div className='flex gap-8'>
                        <div className='w-36 h-28'>
                            <img src="/dl.svg" alt="" />
                            <p className='text-[#001931] mt-2'>Downloads</p>
                            <h1 className='text-[40px] text-[#001931] font-extrabold'>{formatDownloads(downloads)}</h1>
                        </div>

                        <div className='w-36 h-28'>
                            <img src="/star.svg"></img>
                            <p className='text-[#001931] mt-2'>Average Ratings</p>
                            <h1 className='text-[40px] text-[#001931] font-extrabold'>{ratingAvg}</h1>
                        </div>
                        <div className='w-36 h-28'>
                            <img src="/rv.svg" alt="" />
                            <p className='text-[#001931] mt-2'>Total Reviews</p>
                            <h1 className='text-[40px] text-[#001931] font-extrabold'>{formatReviews(reviews)}</h1>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn text-white p-7 mt-2 text-xl bg-[#00D390]">Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-10/12 ">
                <hr className='my-10'/>
                <h2 className="mt-8 text-2xl font-bold">Ratings</h2>
                <Recharts ratings={ratings} />
            </div>
            <div className='mx-auto max-w-10/12 '>
                <hr className='my-10' />
                <h1 className='text-2xl font-bold '>Description</h1>
                <p className='mt-4 text-[#627382]'>{description}</p>
            </div>

        </div>
    );
};

export default AppDetails;