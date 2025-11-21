import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      
      <div className='flex-1'>
        <Outlet />
      </div>

    </div>
  );
};

export default MainLayout;