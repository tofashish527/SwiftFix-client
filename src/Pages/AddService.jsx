import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(user)
    
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const formdata = new FormData(form);
        const data = Object.fromEntries(formdata.entries());
        console.log(data)

        axios.post('https://b11a11-server-side-tofashish527.vercel.app/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Service added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/manageservices');
                }
            })
            .catch(console.log);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-8">
            <Helmet>
                <title>SwiftFix | Add Service</title>
            </Helmet>

            {/* Background Decorations */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto p-6"
            >
                {/* Header */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
                        Add New Service
                    </h1>
                    <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
                        List your service and reach thousands of potential customers
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-cyan-600/30"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleAddService} className="space-y-8">

                        {/* Service Information */}
                        <motion.fieldset 
                            className="border border-cyan-600/30 rounded-2xl p-6 space-y-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <legend className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4">
                                Service Information
                            </legend>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="serviceName">
                                        Service Name *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="serviceName" 
                                        name="serviceName" 
                                        placeholder="Enter ServiceName" 
                                        className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="imageUrl">
                                        Service Image URL *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="imageUrl" 
                                        name="serviceImage" 
                                        placeholder="Enter Service URL" 
                                        className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="price">
                                        Price (৳) *
                                    </label>
                                    <input 
                                        type="number" 
                                        id="price" 
                                        name="servicePrice" 
                                        placeholder="Enter service price" 
                                        className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="area">
                                        Service Area *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="area" 
                                        name="serviceArea" 
                                        placeholder="Enter Service Area" 
                                        className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="description">
                                    Service Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Describe your service in detail. Include what customers can expect, duration, materials used, etc."
                                    className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all duration-300"
                                    rows={4}
                                    required
                                />
                            </div>
                        </motion.fieldset>

                        {/* Provider Information */}
                        <motion.fieldset 
                            className="border border-cyan-600/30 rounded-2xl p-6 space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <legend className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4">
                                Provider Information
                            </legend>
                            
                            <div>
                                <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="providerPhoto">
                                    Provider Image URL
                                </label>
                                <input 
                                    type="text" 
                                    name='providerImage' 
                                    id="providerPhoto" 
                                    value={user?.photoURL || ""} 
                                    readOnly 
                                    className="w-full px-4 py-3 bg-cyan-800/30 border border-cyan-600/30 rounded-2xl text-cyan-300 cursor-not-allowed"
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="providerName">
                                        Provider Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="providerName" 
                                        name='providerName' 
                                        value={user?.displayName || ""} 
                                        readOnly 
                                        className="w-full px-4 py-3 bg-cyan-800/30 border border-cyan-600/30 rounded-2xl text-cyan-300 cursor-not-allowed"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-3 text-cyan-100 font-semibold" htmlFor="providerEmail">
                                        Provider Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="providerEmail" 
                                        name='providerEmail' 
                                        value={user?.email || ""} 
                                        readOnly 
                                        className="w-full px-4 py-3 bg-cyan-800/30 border border-cyan-600/30 rounded-2xl text-cyan-300 cursor-not-allowed"
                                    />
                                </div>
                            </div>
                        </motion.fieldset>

                        {/* Submit Button */}
                        <motion.div 
                            className="text-center pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <motion.input 
                                type="submit" 
                                value="Add Service" 
                                className="w-full md:w-1/2 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl cursor-pointer transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            />
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AddService;