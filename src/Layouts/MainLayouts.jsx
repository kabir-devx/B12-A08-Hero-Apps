import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;