import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const ServiceCard = ({ service}) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    serviceArea,
    providerName,
    providerEmail,
    providerImage
  } = service;

  return (
    <div className="rounded-md shadow-md bg-white dark:bg-gray-50 dark:text-gray-800 rounded-xl border border-blue-200">
      {/* Service Image */}
      <img
        src={serviceImage}
        alt={serviceName}
        className="object-cover object-center w-full rounded-t-md h-72"
      />

      {/* Content Section */}
      <div className="flex flex-col justify-between p-6 space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-wide text-pink-950">
            {serviceName}
          </h2>
          <p>{serviceDescription?.length > 100 ? serviceDescription.slice(0, 100) + "..." : serviceDescription}</p>


          <div className="flex items-center gap-2">
            <FaLocationDot  className="text-lime-700" size={30} />
            <p className="text-lime-700 text-lg">
                Area : {serviceArea}
            </p>
          </div>

          <div className="flex items-center gap-2 text-lg">
            <span className="text-red-900 font-bold">Price:</span>
            <span className="px-3 py-1 rounded-3xl border border-cyan-900 text-cyan-800 font-medium">
              ৳ {servicePrice}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={providerImage}
              alt={providerName}
              className="w-10 h-10 rounded-full border border-cyan-800"
            />
            <div>
              <p className="font-medium text-gray-800">{providerName}</p>
              <p className="text-sm text-gray-500">{providerEmail}</p>
            </div>
          </div>
        </div>

       

        <Link to={`/services/${_id}`}>
          <button className="mt-4 w-full p-3 text-center font-semibold tracking-wide rounded-md border-2 border-gray-400 hover:bg-cyan-600 hover:text-white">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;


