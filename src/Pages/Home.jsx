import React from 'react';
import { Link } from 'react-router';
import Hero from '../Components/Hero';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrendingApps/>
            
        </div>
    );
};

export default Home;