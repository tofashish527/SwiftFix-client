import React, { use } from 'react';
import logoo from '../assets/img/logoo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
      const {logOut,user}=use(AuthContext);
  const handleLogOut=()=>{
    logOut().
    then(() => {
      console.log("Log Out Successfully!")
}).catch((error) => {
  console.log(error)
});
  }
    const links = (
  <>
    <li>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Home</NavLink>
    </li>
    <li>
      <NavLink to='/allservices' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Services</NavLink>
    </li>
   {
    user && <li>
      <details>
        <summary>Dashboard</summary>
        <ul className="p-5 w-40">
          <li className=''>
            <NavLink to='/addservice' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Add Service</NavLink>
          </li>
          <li>
            <NavLink to='/manageservices' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Manage Service</NavLink>
          </li>
          <li>
            <NavLink to='/bookedservices' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Booked Services</NavLink>
          </li>
          <li>
            <NavLink to='/servicestodo' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Services To Do</NavLink>
          </li>
        </ul>
      </details>
    </li>
   } 
  </>
);

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start mx-14">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
     <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                        <div className="flex items-center space-x-3">
                            <Link to='/'><img src={logoo} alt="Logo" className="h-16 w-auto" /></Link>
                            <span className="text-3xl font-bold">SwiftFix</span>
                        </div>
                    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4">
  {user && (
    <div className="relative group flex items-center gap-2">
      <span className=" border p-2 border-blue-100 btn text-sm font-medium whitespace-nowrap bg-white p-1 rounded shadow  ">
        {user.displayName || "User"}
      </span>
    </div>
  )}

  {user ? (
    <button className="border border-blue-950 hover:bg-blue-950 hover:text-white p-4  bg-blue-950 text-white border-blue-100 btn text-sm font-medium whitespace-nowrap hover:bg-white hover:text-blue-950  p-1 rounded shadow  " onClick={handleLogOut}>LogOut</button>
  ) : (
    <NavLink to="/login" className="border border-blue-950 p-4 bg-blue-950 text-white border-blue-100 btn text-sm font-medium whitespace-nowrap hover:bg-white hover:text-blue-950 p-1 rounded shadow  ">Login</NavLink>
  )}
</div>

</div>
    );
};

export default Navbar;