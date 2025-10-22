import React, { useContext, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const ServiceDetails = () => {
    const service = useLoaderData();
     const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [takingDate, setTakingDate] = useState("");
    const [instructions, setInstructions] = useState("");
    
const handleBooking = (e) => {
      e.preventDefault(); 
  const booking = {
    serviceId: service._id,             
  service_id: service.serviceId,  
    serviceName: service.serviceName,
    serviceImage: service.serviceImage,
    providerEmail: service.providerEmail,
    providerName: service.providerName,
    userEmail: user.email,
    userName: user.displayName,
    takingDate,
    instructions,
    price: service.servicePrice,
    serviceStatus: "pending",
  };

  axios.post("http://localhost:3001/booking", booking)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service booked successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setShowModal(false); 
        setTakingDate("");  
        setInstructions("");
        navigate('/bookedservices')
      }
    })
    .catch((err) => {
      console.error("Booking error:", err);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "Please try again later.",
      });
    });
};
    return (
        <div className='max-w-4xl mx-auto my-5'>
             <Helmet>
        <title>
          SwiftFix | ServiceDetails
        </title>
      </Helmet>
            <div className="rounded-md shadow-md bg-white dark:bg-gray-50 dark:text-gray-800 rounded-xl border pt-20 border-blue-200">
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
                        {/* <p className="text-gray-700">
                            {service.serviceDescription.length > 100
                                ? service.serviceDescription.slice(0, 100) + '...'
                                : service.serviceDescription}
                        </p> */}
                        <p>{service.serviceDescription?.length > 100 ? service.serviceDescription.slice(0, 100) + "..." : service.serviceDescription}</p>


                        <div className="flex items-center gap-2">
                            <FaLocationDot className="text-lime-700" size={30} />
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




                    <button onClick={() => setShowModal(true)} className="mt-4 w-full p-3 text-center font-semibold tracking-wide rounded-md border-2 border-gray-400 hover:bg-cyan-600 hover:text-white">
                        Book Now
                    </button>
                    {/* Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">

                            <div className="max-w-3xl w-full mx-4 bg-indigo-50 p-6 rounded-xl shadow-lg relative overflow-y-auto max-h-[90vh]">
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500"
                                >
                                    &times;
                                </button>

                                <h2 className="text-xl font-bold text-center mb-4">Confirm Booking</h2>

                                {/* Service Image */}
                                <div className="mb-4">
                                    <img src={service?.serviceImage} alt={service?.serviceName} className="rounded-md w-full h-64 object-cover border border-gray-300" />
                                </div>

                                <form className="space-y-6">
                                    {/* Booking Info */}
                                    <fieldset className="border rounded-md p-4">
                                        <legend className="text-lg font-semibold mb-2">Booking Details</legend>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium">Service ID</label>
                                                <input disabled value={service?.serviceId} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Service Name</label>
                                                <input disabled value={service?.serviceName} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Provider Name</label>
                                                <input disabled value={service?.providerName} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Provider Email</label>
                                                <input disabled value={service?.providerEmail} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Your Name</label>
                                                <input disabled value={user?.displayName || ''} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Your Email</label>
                                                <input disabled value={user?.email} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Service Price</label>
                                                <input disabled value={`৳ ${service?.servicePrice}`} className="input input-bordered w-full" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Service Taking Date</label>
                                                <input
                                                    type="date"
                                                    required
                                                    value={takingDate}
                                                    onChange={(e) => setTakingDate(e.target.value)}
                                                    className="input input-bordered w-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-sm font-medium">Special Instructions</label>
                                            <textarea
                                                rows={3}
                                                placeholder="Enter address, time, plan..."
                                                className="textarea textarea-bordered w-full"
                                                value={instructions}
                                                onChange={(e) => setInstructions(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </fieldset>

                                    <div className="text-center">
                                        <button  onClick={handleBooking} type="" className="btn btn-success w-full md:w-1/2 mt-4">
                                            <Link to='/bookedservices'>Purchase</Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>



                    )}

                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;

