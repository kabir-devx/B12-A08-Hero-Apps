import { Search } from 'lucide-react';
import React, { useState } from 'react';
import useData from '../Hooks/useData';
import AppCard from '../Components/AppCard';

const Apps = () => {
  const { apps, loading } = useData()
  const [search, setSearch] = useState('')


  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000000)
      return (downloads / 1000000000).toFixed(0) + "B";
    if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + "M";
    if (downloads >= 1000) return (downloads / 1000).toFixed(0) + "K";
    return downloads;
  };
  return (
    <div className="flex flex-col pt-20 bg-[#f5f5f5]">
      <div>
        <h1 className="text-center text-5xl mb-4 font-bold text-[#001931]">Our All Applications</h1>
        <p className='text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex items-center justify-between w-full py-4 mx-auto max-w-9/12">
        <h1 className="text-2xl font-semibold">({filteredApps.length}) Apps Found</h1>

        <label className="relative flex items-center w-full max-w-md text-gray-700">
          <Search className="absolute w-5 h-5 text-gray-400 pointer-events-none left-3" />
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Apps..."
            className="w-full py-2 pl-10 pr-4 placeholder-gray-400 transition bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
      </div>

      {filteredApps.length > 0 ?
        <div className="grid grid-cols-1 gap-4 mx-auto mt-10 mb-20 max-w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id}
              id={app.id}
              image={app.image}
              title={app.title}
              downloads={formatDownloads(app.downloads)}
              ratingAvg={app.ratingAvg} />
          ))}
        </div>

        : (
          <div className='flex flex-col items-center justify-center mx-auto max-w-7xl'>
            <img src="/src/assets/App-Error.png" alt="" />
            <h1 className='mt-12 text-5xl font-semibold '>OPPS!! APP NOT FOUND</h1>
            <p className='mt-3 text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={() => setSearch('')} className='btn btn-lg mt-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</button>
          </div>
      )}
    </div>
  );
};

export default Apps;