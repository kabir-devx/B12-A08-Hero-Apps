import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ClimbingBoxLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    const navigation = useNavigation();
    const isRouteLoading = navigation.state === "loading";

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <Navbar />

            <div className="flex-1">
                {isRouteLoading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <ClimbingBoxLoader color="#8d73f4" size={20} />
                    </div>
                ) : (
                    <Outlet />
                )}
            </div>

            <Footer />
            <ToastContainer position="top-right"/>
        </div>
    );
};
    
export default MainLayout;