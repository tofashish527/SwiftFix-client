import React, { useEffect, useState } from 'react';
import ServiceCard from '../Component/ServiceCard';

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className='mt-5 mb-10 px-4'>
      <h2 className='text-center text-3xl font-bold mb-8 mt-3 text-gray-800'>All Hobby Groups</h2>
      <div className='max-w-7xl mx-auto grid grid-cols-1
gap-6'>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
