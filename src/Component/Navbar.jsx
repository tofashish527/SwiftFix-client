// import React, { use } from 'react';
// import logoo from '../assets/img/logoo.png';
// import { Link, NavLink } from 'react-router';
// import { AuthContext } from '../Context/AuthContext';

// const Navbar = () => {
//   const { logOut, user } = use(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("Log Out Successfully!");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Home</NavLink>
//       </li>
//       <li>
//         <NavLink to='/allservices' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Services</NavLink>
//       </li>
//       {user && (
//         <li>
//           <details>
//             <summary>Dashboard</summary>
//             <ul className="p-5 w-40">
//               <li>
//                 <NavLink to='/addservice' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Add Service</NavLink>
//               </li>
//               <li>
//                 <NavLink to='/manageservices' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Manage Service</NavLink>
//               </li>
//               <li>
//                 <NavLink to='/bookedservices' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Booked Services</NavLink>
//               </li>
//               <li>
//                 <NavLink to='/booking/:id' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Services To Do</NavLink>
//               </li>
//             </ul>
//           </details>
//         </li>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm relative z-10">
//       <div className="navbar-start mx-14">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
//           <div className="flex items-center space-x-3">
//             <Link to='/'><img src={logoo} alt="Logo" className="h-16 w-auto" /></Link>
//             <span className="text-3xl font-bold">SwiftFix</span>
//           </div>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end flex items-center gap-4">
//         {user && (
//           <div className="relative group flex items-center gap-2">
//             <span className="border p-2 border-blue-100 btn text-sm font-medium whitespace-nowrap bg-white p-1 rounded shadow">
//               {user.displayName || "User"}
//             </span>
//           </div>
//         )}

//         {user ? (
//           <button
//             className="border hover:border-blue-950 p-4 bg-blue-950 text-white border-blue-100 btn text-sm font-medium whitespace-nowrap hover:bg-white hover:text-blue-950 p-1 rounded shadow"
//             onClick={handleLogOut}
//           >
//             LogOut
//           </button>
//         ) : (
//           <NavLink
//             to="/login"
//             className="border border-blue-950 p-4 bg-blue-950 text-white border-blue-100 btn text-sm font-medium whitespace-nowrap hover:bg-white hover:text-blue-950 p-1 rounded shadow"
//           >
//             Login
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useContext } from "react";
// import logoo from "../assets/img/logoo.png";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../Context/AuthContext";

// const Navbar = () => {
//   const { logOut, user } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => console.log("Logged out successfully"))
//       .catch((error) => console.error(error));
//   };

//   const navLinkStyle = ({ isActive }) =>
//     isActive
//       ? "text-white font-semibold underline underline-offset-4"
//       : "text-gray-200 hover:text-white transition";

//   const links = (
//     <>
//       <li>
//         <NavLink to="/" className={navLinkStyle}>
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/about" className={navLinkStyle}>
//           About Us
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/allservices" className={navLinkStyle}>
//           Services
//         </NavLink>
//       </li>

//       {user && (
//         <>
//         <li>
//           <details>
//             <summary className="cursor-pointer text-gray-200 hover:text-white">
//               Dashboard
//             </summary>
//             <ul className="p-3 bg-gradient-to-r from-blue-900 to-cyan-600 rounded-lg space-y-2 text-white">
//               <li>
//                 <NavLink to="/addservice" className={navLinkStyle}>
//                   Add Service
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/manageservices" className={navLinkStyle}>
//                   Manage Service
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/bookedservices" className={navLinkStyle}>
//                   Booked Services
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/booking/:id" className={navLinkStyle}>
//                   Services To Do
//                 </NavLink>
//               </li>
//             </ul>
//           </details>
//         </li>
//         <li>
//         <NavLink to="/package" className={navLinkStyle}>
//           Packages
//         </NavLink>
//       </li>
//        <li>
//         <NavLink to="/contact" className={navLinkStyle}>
//           Contact
//         </NavLink>
//       </li>
//       </>
//       )}
      
//     </>
//   );

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 to-cyan-600 text-white shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <Link to="/">
//             <img src={logoo} alt="Logo" className="h-12 w-auto" />
//           </Link>
//           <span className="text-2xl font-bold tracking-wide">SwiftFix</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-8">
//           <ul className="flex items-center space-x-6">{links}</ul>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4">
//           {user && (
//             <span className="bg-white text-blue-900 px-3 py-1 rounded-full font-medium shadow">
//               {user.displayName || "User"}
//             </span>
//           )}
//           {user ? (
//             <button
//               onClick={handleLogOut}
//               className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white border border-white transition"
//             >
//               Log Out
//             </button>
//           ) : (
//             <NavLink
//               to="/login"
//               className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white border border-white transition"
//             >
//               Login
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Menu, X, ChevronDown } from "lucide-react";
import logoo from "../assets/img/logoo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out successfully"))
      .catch((err) => console.error(err));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-semibold underline underline-offset-4"
      : "text-gray-200 hover:text-white transition";

  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 to-cyan-600 text-white shadow-lg z-50">
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex justify-between  items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoo} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold tracking-wide">SwiftFix</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About Us
          </NavLink>
          <NavLink to="/allservices" className={navLinkStyle}>
            Services
          </NavLink>
          <NavLink to="/findusnearyou" className={navLinkStyle}>
            Find Us Near You
          </NavLink>

         
              <NavLink to='/dashboard/addservice' className="flex items-center space-x-1 text-gray-200 hover:text-white">
                <span>Dashboard</span>
               
              </NavLink>
              
          

          {user && (
            <>
              <NavLink to="/package" className={navLinkStyle}>
                Packages
              </NavLink>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact
              </NavLink>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {user && (
            <span className="bg-white text-blue-900 px-3 py-1 rounded-full font-medium shadow">
              {user.displayName || "User"}
            </span>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white border border-white transition"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white border border-white transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-blue-950 to-cyan-700 py-4 space-y-3 px-6 animate-fadeIn">
          <NavLink to="/" className="block text-white font-medium" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="block text-white font-medium" onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/allservices" className="block text-white font-medium" onClick={toggleMenu}>
            Services
          </NavLink>

          {user && (
            <div>
              <NavLink to='/dashboard/addservice'
                className="flex justify-between items-center w-full text-white font-medium py-2"
              >
                Dashboard
                
              </NavLink>

             
            </div>
          )}

          {user && (
            <>
              <NavLink to="/package" className="block text-white font-medium" onClick={toggleMenu}>
                Packages
              </NavLink>
              <NavLink to="/contact" className="block text-white font-medium" onClick={toggleMenu}>
                Contact
              </NavLink>
            </>
          )}

          <div className="pt-4 border-t border-cyan-500">
            {user ? (
              <button
                onClick={() => {
                  handleLogOut();
                  toggleMenu();
                }}
                className="w-full bg-white text-blue-900 py-2 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition"
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className="block bg-white text-blue-900 py-2 rounded-md font-semibold text-center hover:bg-blue-900 hover:text-white transition"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

