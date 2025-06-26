import React, { useEffect, useState } from 'react';
import ServiceCard from '../Component/ServiceCard';
import { Helmet } from 'react-helmet';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  
  useEffect(() => {
    const lowerSearch = searchText.toLowerCase();
    const filtered = services.filter(service =>
      service.serviceName.toLowerCase().includes(lowerSearch)
    );
    setFilteredServices(filtered);
  }, [searchText, services]);


  return (
    
    <div className='mt-5 mb-10 px-4'>
      <Helmet>
        <title>
          SwiftFix | AllService
        </title>
           <meta name="description" content="Browse all available services on SwiftFix." />
      </Helmet>
      <h2 className='text-center text-3xl font-bold mb-8 mt-3 text-gray-800'>All Services</h2>
      
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Search services by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className='max-w-5xl mx-auto grid grid-cols-1 gap-6'>
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default AllServices;
