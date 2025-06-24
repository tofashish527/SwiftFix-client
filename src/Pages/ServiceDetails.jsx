import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const service = useLoaderData();
    //  const { user } = useContext(AuthContext);
//   const [showModal, setShowModal] = useState(false);

//   const handleBookingSubmit = (bookingData) => {
//     // send POST to DB
//     fetch('http://localhost:3000/bookings', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(bookingData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert("Service booked successfully!");
//       });
//   };
    return (
        <div className='max-w-4xl mx-auto my-5'>
            <div className="rounded-md shadow-md bg-white dark:bg-gray-50 dark:text-gray-800 rounded-xl border border-blue-200">
              {/* Service Image */}
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="object-cover object-center w-full rounded-t-md h-72"
              />
        
              {/* Content Section */}
              <div className="flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold tracking-wide text-pink-950">
                    {service.serviceName}
                  </h2>
                  <p className="text-gray-700">
                    {service.serviceDescription.length > 100
                      ? service.serviceDescription.slice(0, 100) + '...'
                      : service.serviceDescription}
                  </p>
        
                  <div className="flex items-center gap-2">
                    <FaLocationDot  className="text-lime-700" size={30} />
                    <p className="text-lime-700 text-lg">
                        Area : {service.serviceArea}
                    </p>
                  </div>
        
                  <div className="flex items-center gap-2 text-lg">
                    <span className="text-red-900 font-bold">Price:</span>
                    <span className="px-3 py-1 rounded-3xl border border-cyan-900 text-cyan-800 font-medium">
                      ৳ {service.servicePrice}
                    </span>
                  </div>
        
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={service.providerImage}
                      alt={service.providerName}
                      className="w-10 h-10 rounded-full border border-cyan-800"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{service.providerName}</p>
                      <p className="text-sm text-gray-500">{service.providerEmail}</p>
                    </div>
                  </div>
                </div>
        
               
        
                <Link>
                  <button className="mt-4 w-full p-3 text-center font-semibold tracking-wide rounded-md border-2 border-gray-400 hover:bg-cyan-600 hover:text-white">
                    Book Now
                  </button>
                   {/* {showModal && (
        <BookingModal
          service={service}
          user={user}
          onClose={() => setShowModal(false)}
          onSubmit={handleBookingSubmit}
        />
      )} */}
                </Link>
              </div>
            </div>
        </div>
        
    );
};

export default ServiceDetails;