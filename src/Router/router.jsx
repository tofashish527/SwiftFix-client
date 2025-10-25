// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";
// import Rootlayout from "../Layout/Rootlayout";
// import Home from "../Pages/Home";
// import Error from "../Pages/Error";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";
// import AddService from "../Pages/AddService";
// import Privateroute from "./Privateroute";
// import ServiceDetails from "../Pages/ServiceDetails";
// import AllServices from "../Pages/AllServices";
// import ManageSevices from "../Pages/ManageSevices";
// import BookedServices from "../Pages/BookedServices";
// import UpdateService from "../Pages/UpdateService";
// import Spinner from "../Component/Spinner";
// import ServiceToDo from "../Pages/ServiceToDo";
// import About from "../Pages/About";
// import ContactUs from "../Pages/ContactUs";
// import Packages from "../Pages/Packages";
// import FindUsNearYou from "../Pages/FindUsNearYou";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component:Rootlayout,
//     errorElement:<Error></Error>,
//     children:[
//         {
//             path:'/',
//             index:true,
//             Component:Home
//         },
//         {
//             path:'/about',
//             Component:About,
//         },
//         {
//             path:'/contact',
//             element:<Privateroute><ContactUs></ContactUs></Privateroute>
//         },
//         {
//             path:'/package',
//             element:<Privateroute><Packages></Packages></Privateroute>
//         },
//         {
//             path:'/findusnearyou',
//             element:<Privateroute><FindUsNearYou
//             ></FindUsNearYou></Privateroute>
//         },
//          {
//             path:'/allservices',
//             Component:AllServices,
//             hydrateFallbackElement:<Spinner></Spinner>,
//             loader:()=>fetch('https://b11a11-server-side-tofashish527.vercel.app/services/'),
//         },
//         {
//             path:'/addservice',
//             hydrateFallbackElement:<Spinner></Spinner>,
//             element:<Privateroute><AddService></AddService></Privateroute>
//         },
//         {
//         path:'/updateservice/:id',
//         hydrateFallbackElement:<Spinner></Spinner>,
//         loader:({params})=>fetch(`https://b11a11-server-side-tofashish527.vercel.app/services/${params.id}`),
//         element:<Privateroute><UpdateService></UpdateService></Privateroute>,
//         },
//         {
//             path:'/manageservices',
//             hydrateFallbackElement:<Spinner></Spinner>,
//             element:<Privateroute><ManageSevices></ManageSevices></Privateroute>
//         },
//         {
//             path:'/bookedservices',
//             hydrateFallbackElement:<Spinner></Spinner>,
//             element:<Privateroute><BookedServices></BookedServices></Privateroute>
//         },
//          {
//             path:'/booking/:id',
//             hydrateFallbackElement:<Spinner></Spinner>,
//             element:<Privateroute><ServiceToDo></ServiceToDo></Privateroute>
//         },
//         {
//             path:'/services/:id',
//             hydrateFallbackElement:<Spinner></Spinner>,
//             element:<Privateroute><ServiceDetails></ServiceDetails></Privateroute>,
//             loader:({params})=>fetch(`https://b11a11-server-side-tofashish527.vercel.app/services/${params.id}`)
//         },
//         {
//             path:'/login',
//             Component:Login,
//         },
//         {
//             path:'/register',
//             Component:Register,
//         },
//     ]
//   },
// ]);

// export default router;


import {
  createBrowserRouter,
} from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import DashboardLayout from "../Layout/DashboardLayout"; // <-- new layout
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Privateroute>
            <ContactUs />
          </Privateroute>
        ),
      },
      {
        path: "/package",
        element: (
          <Privateroute>
            <Packages />
          </Privateroute>
        ),
      },
      {
        path: "/findusnearyou",
        element: (
          <Privateroute>
            <FindUsNearYou />
          </Privateroute>
        ),
      },
      {
        path: "/allservices",
        element: <AllServices />,
        loader: () =>
          fetch("https://b11a11-server-side-tofashish527.vercel.app/services/"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/services/:id",
        element: (
          <Privateroute>
            <ServiceDetails />
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-tofashish527.vercel.app/services/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // ===========================
  // DASHBOARD ROUTES (new section)
  // ===========================
  {
    path: "/dashboard",
    element: (
      <Privateroute>
        <DashboardLayout />
      </Privateroute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "addservice",
        element: <AddService />,
      },
      {
        path: "manageservices",
        element: <ManageSevices />,
      },
      {
        path: "bookedservices",
        element: <BookedServices />,
      },
      {
        path: "booking/:id",
        element: <ServiceToDo />,
      },
      {
        path: "updateservice/:id",
        element: <UpdateService />,
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-tofashish527.vercel.app/services/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
      },
    ],
  },
]);

export default router;
