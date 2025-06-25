import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import Privateroute from "./Privateroute";
import ServiceDetails from "../Pages/ServiceDetails";
import AllServices from "../Pages/AllServices";
//import ManageSevices from "../Pages/ManageSevices";
import BookedServices from "../Pages/BookedServices";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            index:true,
            Component:Home
        },
         {
            path:'/allservices',
            Component:AllServices,
            loader:()=>fetch('http://localhost:3000/services/'),
        },
        {
            path:'/addservice',
            element:<Privateroute><AddService></AddService></Privateroute>
        },
        // {
        //     path:'/manageservices',
        //     element:<Privateroute><ManageSevices></ManageSevices></Privateroute>
        // },
        {
            path:'/bookedservices',
            element:<Privateroute><BookedServices></BookedServices></Privateroute>
        },
        {
            path:'/services/:id',
            element:<Privateroute><ServiceDetails></ServiceDetails></Privateroute>,
            loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
            path:'/login',
            Component:Login,
        },
        {
            path:'/register',
            Component:Register,
        },
    ]
  },
]);

export default router;