import React, {  useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router';

const PopularServices = () => {
       const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

    const topServices = services.slice(0, 6);
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
        Our Most Popular Services
      </h2>
        <div className="px-4 md:px-10 py-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
    {topServices.map((service) => (
      <ServiceCard key={service._id} service={service} />
    ))}
  </div>
 </div>
  <div className="flex justify-center mb-5">
          <Link to="/allservices">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all">
              Show All Services
            </button>
          </Link>
        </div>
        </div>
    );
};

export default PopularServices;