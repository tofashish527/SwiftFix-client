import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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