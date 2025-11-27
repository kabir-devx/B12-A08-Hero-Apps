import React from 'react';
import { Link } from 'react-router';
import Hero from '../Components/Hero';
import TrendingApps from '../Components/TrendingApps';
import useData from '../Hooks/useData';
import { ClimbingBoxLoader } from 'react-spinners';


const Home = () => {
    const { loading } = useData()
    return (
        <div>
            {loading ? (<div className="flex items-center justify-center min-h-screen">
                <ClimbingBoxLoader color="#8d73f4" size={20} />
            </div>) : (<div>
                <Hero />
                <TrendingApps />

            </div>)}
        </div>
    );
};

export default Home;