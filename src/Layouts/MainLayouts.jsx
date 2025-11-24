import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#f5f5f5]'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;