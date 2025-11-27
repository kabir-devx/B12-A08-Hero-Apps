import React from 'react';
import { useState } from 'react';
import { installedAppList, removeFromAppList } from '../Utils/LocalStorage';
import { HiOutlineDownload } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import useData from '../Hooks/useData';
import Loader from '../Components/Loader';
import { ClimbingBoxLoader } from 'react-spinners';

const Installation = () => {
	const [install, setInstall] = useState(() => installedAppList())
	const [sortOrder, setSortOrder] = useState(['none'])

	const { loading } = useData()

	const sortedItem = (() => {
		if (sortOrder === 'Downloads-asc') {
			return [...install].sort((a, b) => a.downloads - b.downloads)
		} else if (sortOrder === 'Downloads-desc') {
			return [...install].sort((a, b) => b.downloads - a.downloads)
		} else {
			return install
		}
	})()

	const formatDownloads = (downloads) => {
		if (downloads >= 1000000000)
			return (downloads / 1000000000).toFixed(0) + "B";
		if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + "M";
		if (downloads >= 1000) return (downloads / 1000).toFixed(0) + "K";
		return downloads;
	};
	const handleRemove = (id, title) => {
		removeFromAppList(id)
		setInstall(prev => prev.filter(p => p.id !== id))
		toast.warning(`Uninstalled ${title}!`)

	}

	return (
		<>
			{loading ? <div className="flex items-center justify-center min-h-screen">
				<ClimbingBoxLoader color="#8d73f4" size={20} />
			</div> : (
				<div className='pb-10 mx-auto max-w-9/12'>
					<div className={`${install.length === 0 ? "hidden" : ""}`}>
						<div className='flex flex-col gap-4 mt-20 text-center'>
							<h1 className='text-5xl font-semibold'>Your Installed Apps</h1>
							<p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
						</div>
						<div className='flex justify-between mt-4'>
							<h1 className='text-2xl font-semibold'>{install.length} Apps Found</h1>
							<div className='w-full max-w-xs form-control'  htmlFor="">
									<select
										value={String(sortOrder || "none")}
										className='select'
										onChange={e => setSortOrder(e.target.value)}
									>
										<option value="none">Sort By Downloads</option>
										<option value="Downloads-asc">Low to High</option>
										<option value="Downloads-desc">High to Low</option>
									</select>

							</div>
						</div>
					</div>
					{install.length > 0 ? (<div className='flex flex-col gap-4 mt-10'>
						{sortedItem.map(a => (<div key={a.id} className='flex items-center justify-between p-4 bg-white rounded-sm shadow-sm'>
							<div className='flex gap-6'>
								<img className='w-20 h-20 rounded-sm' src={a.image} alt={a.title} />
								<div className='flex flex-col justify-center gap-4'>
									<h1 className='text-xl font-medium'>{a.title}</h1>
									<div className='flex items-center gap-4'>
										<div className='flex items-center'>
											<HiOutlineDownload size={16} color='#1ed79b' />
											<p className='text-[#1ed79b]'>{formatDownloads(a.downloads)}</p>
										</div>
										<div className='flex items-center'>
											<FaStar size={16} color='#FF8811' />
											<p className='text-[#FF8811]'>{a.ratingAvg}</p>
										</div>
										<p>{a.size} MB</p>
									</div>
								</div>
							</div>
							<button onClick={() => {
								handleRemove(a.id, a.title);
							}} className='text-white btn btn-success'>Uninstall</button>
						</div>))}
					</div>) : (
						<div className="flex flex-col items-center justify-center mx-auto mt-20 max-w-7xl">
							<img src="/App-Error.png" alt="Not Found" className="mb-6 w-60" />
							<h1 className="mt-12 text-5xl font-semibold">OPPS!! NO APPS INSTALLED!</h1>
							<p className="mt-3 text-xl text-[#627382]">
								There is no apps found on My Installation. Please install apps.
							</p>
							<Link to='/apps'

								className="btn btn-lg mt-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
							>
								Install Apps
							</Link>
						</div>
					)}
					<ToastContainer />
				</div>
			)}

		</>
	);
};

export default Installation;