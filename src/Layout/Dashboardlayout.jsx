import { NavLink, Outlet } from "react-router";
import Navbar from "../Component/Navbar";

const Dashboardlayout = () => {
  const navLinks = [
    { path: "addservice", label: "Add Service" },
    { path: "manageservices", label: "Manage Services" },
    { path: "bookedservices", label: "Booked Services" },
    { path: "booking/:id", label: "Services To Do" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-cyan-900 to-blue-900 text-white shadow-lg p-6 space-y-4 fixed top-20 bottom-0 left-0 h-[calc(100vh-5rem)]">
          <h2 className="text-xl font-bold mb-6 border-b border-cyan-500 pb-3">Dashboard</h2>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500 text-white font-semibold"
                        : "text-gray-200 hover:bg-cyan-700/40"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 bg-white overflow-auto h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboardlayout;
