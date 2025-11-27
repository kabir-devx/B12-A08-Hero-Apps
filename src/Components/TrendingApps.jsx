import AppCard from "./AppCard";
import useData from "../Hooks/useData";
import { Link } from "react-router";

const TrendingApps = () => {
	const { apps } = useData();
	const trendingApps = apps.slice(0, 8);
	const formatDownloads = (downloads) => {
		if (downloads >= 1000000000)
			return (downloads / 1000000000).toFixed(0) + "B";
		if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + "M";
		if (downloads >= 1000) return (downloads / 1000).toFixed(0) + "K";
		return downloads;
	};
	return (
		<div className="flex flex-col text-center pt-20 bg-[#f5f5f5]">
			<div>
				<h1 className="text-5xl mb-4 font-bold text-[#001931]">Trending Apps</h1>
				<p>Explore All Trending Apps on the Market developed by us</p>
			</div>
			<div className="grid grid-cols-1 gap-4 mx-auto mt-10 max-w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{trendingApps.map((app) => (
					<AppCard
						key={app.id}
						id={app.id}
						image={app.image}
						title={app.title}
						downloads={formatDownloads(app.downloads)}
						ratingAvg={app.ratingAvg}
					/>
				))}
			</div>
			<Link to='/apps' className="btn hover:shadow-sm mt-10 mb-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-fit mx-auto">Show All</Link>
		</div>
	);
};

export default TrendingApps;
