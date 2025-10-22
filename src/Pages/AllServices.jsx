// import React, { useEffect, useState } from 'react';
// import ServiceCard from '../Component/ServiceCard';
// import { Helmet } from 'react-helmet';

// const AllServices = () => {
//   const [services, setServices] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [filteredServices, setFilteredServices] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/services")
//       .then(res => res.json())
//       .then(data => setServices(data));
//   }, []);

  
//   useEffect(() => {
//     const lowerSearch = searchText.toLowerCase();
//     const filtered = services.filter(service =>
//       service.serviceName.toLowerCase().includes(lowerSearch)
//     );
//     setFilteredServices(filtered);
//   }, [searchText, services]);


//   return (
    
//     <div className='mt-5 mb-10 px-4'>
//       <Helmet>
//         <title>
//           SwiftFix | AllService
//         </title>
//            <meta name="description" content="Browse all available services on SwiftFix." />
//       </Helmet>
//       <h2 className='text-center text-3xl font-bold mb-8 mt-3 text-gray-800'>All Services</h2>
      
//       <div className="max-w-md mx-auto mb-6">
//         <input
//           type="text"
//           className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
//           placeholder="Search services by name..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </div>

//       <div className='max-w-5xl mx-auto grid grid-cols-1 gap-6'>
//         {filteredServices.length > 0 ? (
//           filteredServices.map(service => (
//             <ServiceCard key={service._id} service={service} />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No services found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllServices;


import React, { useEffect, useState } from 'react';
import ServiceCard from '../Component/ServiceCard';
import { Helmet } from 'react-helmet';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "", "asc", or "desc"
  const [filteredServices, setFilteredServices] = useState([]);

  // Fetch services once
  useEffect(() => {
    fetch("http://localhost:3001/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Filter + Sort whenever searchText, sortOrder, or services change
  useEffect(() => {
    let filtered = services.filter(service =>
      service.serviceName.toLowerCase().includes(searchText.toLowerCase())
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.servicePrice - b.servicePrice);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.servicePrice - a.servicePrice);
    }

    setFilteredServices(filtered);
  }, [searchText, services, sortOrder]);

  return (
    <div className='mt-5 mb-10 px-4'>
      <Helmet>
        <title>SwiftFix | All Services</title>
        <meta name="description" content="Browse all available services on SwiftFix." />
      </Helmet>

      <h2 className='text-center text-3xl font-bold mb-8 mt-3 text-gray-800'>
        All Services
      </h2>

      {/* Search + Sort Controls */}
      <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-4">
        {/* Search box */}
        <input
          type="text"
          className="w-full sm:w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Search services by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Sort dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllServices;
