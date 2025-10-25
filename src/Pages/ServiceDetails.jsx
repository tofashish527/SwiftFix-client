import React, { useContext, useState } from 'react';
import { FaLocationDot, FaArrowLeft } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

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

        axios.post("https://b11a11-server-side-tofashish527.vercel.app/booking", booking)
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
        <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-8">
            <Helmet>
                <title>SwiftFix | Service Details</title>
            </Helmet>

            {/* Back Button */}
            <motion.div 
                className="max-w-4xl mx-auto px-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.button
                    onClick={() => navigate('/allservices')}
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-800/50 hover:bg-cyan-700/70 text-white font-semibold rounded-2xl border border-cyan-600/50 backdrop-blur-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{ x: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FaArrowLeft className="text-cyan-300 group-hover:text-white transition-colors" />
                    </motion.div>
                    Back to All Services
                </motion.button>
            </motion.div>

            {/* Service Details Card */}
            <motion.div 
                className="max-w-4xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-cyan-700/30 overflow-hidden">
                    {/* Service Image */}
                    <motion.div 
                        className="relative h-80 md:h-96 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={service.serviceImage}
                            alt={service.serviceName}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent"></div>
                        
                        {/* Price Badge */}
                        <motion.div 
                            className="absolute top-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-2xl"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold">৳ {service.servicePrice}</div>
                            <div className="text-sm opacity-90">Starting Price</div>
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="p-8 space-y-6">
                        <motion.div 
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                {service.serviceName}
                            </h2>
                            
                            <p className="text-cyan-100 text-lg leading-relaxed">
                                {service.serviceDescription}
                            </p>

                            {/* Location */}
                            <motion.div 
                                className="flex items-center gap-3 p-4 bg-cyan-800/30 rounded-2xl border border-cyan-600/30"
                                whileHover={{ scale: 1.02 }}
                            >
                                <FaLocationDot className="text-cyan-400 text-2xl flex-shrink-0" />
                                <div>
                                    <p className="text-cyan-200 font-semibold">Service Area</p>
                                    <p className="text-cyan-100 text-lg">{service.serviceArea}</p>
                                </div>
                            </motion.div>

                            {/* Provider Info */}
                            <motion.div 
                                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-cyan-600/20"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.img
                                    src={service.providerImage}
                                    alt={service.providerName}
                                    className="w-16 h-16 rounded-2xl border-2 border-cyan-400 shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                />
                                <div className="flex-1">
                                    <p className="text-cyan-100 font-semibold text-lg">{service.providerName}</p>
                                    <p className="text-cyan-300">{service.providerEmail}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-cyan-200 text-sm">Verified Provider</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Book Now Button */}
                        <motion.button 
                            onClick={() => setShowModal(true)}
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Book Now
                                <motion.svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Booking Modal */}
            {showModal && (
                <motion.div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl shadow-2xl border border-cyan-600/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                    >
                        {/* Modal Header */}
                        <div className="p-6 border-b border-cyan-700/50">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    Confirm Booking
                                </h3>
                                <motion.button
                                    onClick={() => setShowModal(false)}
                                    className="text-cyan-300 hover:text-white text-2xl transition-colors p-2 rounded-full hover:bg-cyan-800/50"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    &times;
                                </motion.button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-6">
                            {/* Service Preview */}
                            <motion.div 
                                className="flex items-center gap-4 p-4 bg-cyan-800/30 rounded-2xl border border-cyan-600/30"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img 
                                    src={service.serviceImage} 
                                    alt={service.serviceName} 
                                    className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400"
                                />
                                <div>
                                    <h4 className="text-cyan-100 font-semibold text-lg">{service.serviceName}</h4>
                                    <p className="text-cyan-300">৳ {service.servicePrice}</p>
                                </div>
                            </motion.div>

                            <form className="space-y-6">
                                {/* Booking Details */}
                                <motion.fieldset 
                                    className="border border-cyan-600/30 rounded-2xl p-6 space-y-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <legend className="text-cyan-100 font-semibold text-lg px-2">Booking Details</legend>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { label: "Service ID", value: service.serviceId },
                                            { label: "Service Name", value: service.serviceName },
                                            { label: "Provider Name", value: service.providerName },
                                            { label: "Provider Email", value: service.providerEmail },
                                            { label: "Your Name", value: user?.displayName || '' },
                                            { label: "Your Email", value: user?.email },
                                            { label: "Service Price", value: `৳ ${service.servicePrice}` }
                                        ].map((field, index) => (
                                            <motion.div 
                                                key={field.label}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                            >
                                                <label className="block text-cyan-200 text-sm font-medium mb-2">
                                                    {field.label}
                                                </label>
                                                <input 
                                                    disabled 
                                                    value={field.value} 
                                                    className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                                />
                                            </motion.div>
                                        ))}
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <label className="block text-cyan-200 text-sm font-medium mb-2">
                                                Service Taking Date *
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                value={takingDate}
                                                onChange={(e) => setTakingDate(e.target.value)}
                                                className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        <label className="block text-cyan-200 text-sm font-medium mb-2">
                                            Special Instructions
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Enter your address, preferred time, special requirements..."
                                            className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                                            value={instructions}
                                            onChange={(e) => setInstructions(e.target.value)}
                                        ></textarea>
                                    </motion.div>
                                </motion.fieldset>

                                {/* Action Buttons */}
                                <motion.div 
                                    className="flex flex-col sm:flex-row gap-4 pt-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <motion.button
                                        onClick={handleBooking}
                                        className="flex-1 py-4 bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10">Confirm Purchase</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.button>
                                    
                                    <motion.button
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 py-4 bg-cyan-800/50 hover:bg-cyan-700/70 text-cyan-100 font-bold rounded-2xl border border-cyan-600/50 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Cancel
                                    </motion.button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default ServiceDetails;