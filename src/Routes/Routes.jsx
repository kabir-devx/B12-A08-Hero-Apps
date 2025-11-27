import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayouts";
import Home from './../Pages/Home';
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <ErrorPage/>,
      children:[
          {index:true, Component:Home},
          {path:'/home', Component:Home},
          {path:'/apps', Component:Apps},
          {path:'/installation', Component:Installation},
          {path:'/app-details/:id', Component:AppDetails},
          {path:'*', Component: ErrorPage}
      ]
    },
  ]);

export default router;