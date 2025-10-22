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
import ManageSevices from "../Pages/ManageSevices";
import BookedServices from "../Pages/BookedServices";
import UpdateService from "../Pages/UpdateService";
import Spinner from "../Component/Spinner";
import ServiceToDo from "../Pages/ServiceToDo";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Packages from "../Pages/Packages";
import FindUsNearYou from "../Pages/FindUsNearYou";
import MyFavorite from "../Pages/Myfavourite";

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
            path:'/about',
            Component:About,
        },
        {
            path:'/contact',
            element:<Privateroute><ContactUs></ContactUs></Privateroute>
        },
        {
            path:'/package',
            element:<Privateroute><Packages></Packages></Privateroute>
        },
        {
            path:'/findusnearyou',
            element:<Privateroute><FindUsNearYou
            ></FindUsNearYou></Privateroute>
        },
         {
            path:'/allservices',
            Component:AllServices,
            hydrateFallbackElement:<Spinner></Spinner>,
            loader:()=>fetch('http://localhost:3001/services/'),
        },
        {
            path:'/addservice',
            hydrateFallbackElement:<Spinner></Spinner>,
            element:<Privateroute><AddService></AddService></Privateroute>
        },
        {
        path:'/updateservice/:id',
        hydrateFallbackElement:<Spinner></Spinner>,
        loader:({params})=>fetch(`http://localhost:3001/services/${params.id}`),
        element:<Privateroute><UpdateService></UpdateService></Privateroute>,
        },
        {
            path:'/manageservices',
            hydrateFallbackElement:<Spinner></Spinner>,
            element:<Privateroute><ManageSevices></ManageSevices></Privateroute>
        },
        {
            path:'/bookedservices',
            hydrateFallbackElement:<Spinner></Spinner>,
            element:<Privateroute><BookedServices></BookedServices></Privateroute>
        },
         {
            path:'/booking/:id',
            hydrateFallbackElement:<Spinner></Spinner>,
            element:<Privateroute><ServiceToDo></ServiceToDo></Privateroute>
        },
        {
            path:'/services/:id',
            hydrateFallbackElement:<Spinner></Spinner>,
            element:<Privateroute><ServiceDetails></ServiceDetails></Privateroute>,
            loader:({params})=>fetch(`http://localhost:3001/services/${params.id}`)
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