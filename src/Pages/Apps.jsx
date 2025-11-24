import { Search } from 'lucide-react';
import React, { useState } from 'react';
import useData from '../Hooks/useData';
import AppCard from '../Components/AppCard';

const Apps = () => {
    const { apps, loading } = useData()
    const [search, setSearch] = useState('')
    const formatDownloads = (downloads) => {
        if (downloads >= 1000000000)
            return (downloads / 1000000000).toFixed(0) + "B";
        if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + "M";
        if (downloads >= 1000) return (downloads / 1000).toFixed(0) + "K";
        return downloads;
    };
    return (
        <div className="flex flex-col  pt-20 bg-[#f5f5f5]">
            <div>
                <h1 className="text-center text-5xl mb-4 font-bold text-[#001931]">Our All Applications</h1>
                <p className='text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between w-full mx-auto max-w-9/12'>
                <h1 className='text-2xl font-semibold'>(12)Apps Found</h1>
                <label className="input">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input type="search" required placeholder="Search Apps" />
                </label>

            </div>
            <div className="grid grid-cols-1 gap-4 mx-auto mt-10 max-w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {apps.map((app) => (
                    <AppCard key={app.id}
                        id={app.id}
                        image={app.image}
                        title={app.title}
                        downloads={formatDownloads(app.downloads)}
                        ratingAvg={app.ratingAvg} />
                ))}
            </div>
        </div>
    );
};

export default Apps;