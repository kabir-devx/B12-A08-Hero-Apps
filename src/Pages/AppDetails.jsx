import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import Recharts from '../Components/Recharts';
import { ClimbingBoxLoader } from 'react-spinners';
import { updatelist } from '../Utils/LocalStorage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading = [] } = useData();
    const app = apps.find(p => String(p.id) === id);
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {};

    const [isInstalled, setIsInstalled] = React.useState(false);

    React.useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('applist') || '[]');
        const installed = installedApps.some(a => a.id === app?.id);
        setIsInstalled(installed);
    }, [app?.id]);


    const formatDownloads = (downloads) => {
        if (downloads >= 1000000000) return (downloads / 1000000000).toFixed(0) + "B";
        if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + "M";
        if (downloads >= 1000) return (downloads / 1000).toFixed(0) + "K";
        return downloads;
    };

    const formatReviews = (reviews) => {
        if (reviews >= 1000000000) return (reviews / 1000000000).toFixed(0) + "B";
        if (reviews >= 1000000) return (reviews / 1000000).toFixed(0) + "M";
        if (reviews >= 1000) return (reviews / 1000).toFixed(0) + "K";
        return reviews;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <ClimbingBoxLoader color="#8d73f4" size={20} />
            </div>
        );
    }

 

    return (
        <div className="mx-auto mt-20 max-w-7xl">
            <div className="bg-[#f5f5f5] flex p-6 rounded-md">
                <figure className='w-[350px] h-[350px]'>
                    <img className='object-cover w-full h-full rounded-sm' src={image} alt={title} />
                </figure>
                <div className="flex flex-col flex-1 gap-6 ml-10">
                    <div>
                        <h2 className="text-[32px] font-bold">{title}</h2>
                        <p className='text-[#627382] text-xl'>
                            Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span>
                        </p>
                    </div>
                    <hr />
                    <div className='flex gap-8'>
                        <div className='w-36 h-28'>
                            <img src="/dl.svg" alt="" />
                            <p className='text-[#001931] mt-2'>Downloads</p>
                            <h1 className='text-[40px] text-[#001931] font-extrabold'>{formatDownloads(downloads)}</h1>
                        </div>
                        <div className='w-36 h-28'>
                            <img src="/star.svg" alt="" />
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
                        <button
                            onClick={() => {
                                updatelist(app);
                                setIsInstalled(true);
                                toast.success(`${title} Installed successfully!`);
                            }}
                            className={`btn text-white p-7 mt-2 text-xl ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
                            disabled={isInstalled}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${size || 0} MB)`}
                        </button>

                    </div>
                </div>
            </div>
            <div className="w-full mx-auto mt-10">
                <hr className='my-10' />
                <h2 className="mt-8 text-2xl font-bold">Ratings</h2>
                <Recharts ratings={ratings} />
            </div>
            <div className='mx-auto mt-10 mb-10 max-w-11/12'>
                <hr className='my-10 ' />
                <h1 className='text-2xl font-bold'>Description</h1>
                <p className='mt-4 text-[#627382]'>{description}</p>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default AppDetails;
