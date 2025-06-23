import React, { use } from 'react';
import logoo from '../assets/img/logoo.png';
import { NavLink } from 'react-router';
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
      <NavLink to='/services' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Services</NavLink>
    </li>
   {
    user && <li>
      <details>
        <summary>Dashboard</summary>
        <ul className="p-2">
          <li>
            <NavLink to='/addservice' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Add Service</NavLink>
          </li>
          <li>
            <NavLink to='/manageservice' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Manage Service</NavLink>
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
                            <img src={logoo} alt="Logo" className="h-16 w-auto" />
                            <span className="text-3xl font-bold">SwiftFix</span>
                        </div>
                    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="navbar-end flex gap-2">
    {
      user ? <button className='btn' onClick={handleLogOut}>LogOut</button> :
    <> 
     <NavLink to='/login' className='btn'>Login</NavLink> 
     </>
 }
  </div>
  </div>
</div>
    );
};

export default Navbar;