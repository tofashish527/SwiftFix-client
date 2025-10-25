import axios from 'axios';
import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Servicelist = ({ serviceCreatedByPromise }) => {
    const service = use(serviceCreatedByPromise);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            background: '#0f172a',
            color: '#e2e8f0',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://b11a11-server-side-tofashish527.vercel.app/services/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your service has been deleted.',
                                icon: 'success',
                                background: '#0f172a',
                                color: '#e2e8f0',
                                confirmButtonColor: '#10b981'
                            }).then(() => {
                                window.location.reload();
                            });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to delete service',
                            icon: 'error',
                            background: '#0f172a',
                            color: '#e2e8f0',
                            confirmButtonColor: '#ef4444'
                        });
                    });
            }
        });
    };

    return (
        <div className=" bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900">
            {/* Background Decorations */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 pt-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
                        Your Services
                    </h1>
                    <p className="text-cyan-100 text-lg">
                        Manage and track all the services you've posted
                    </p>
                </motion.div>

                {/* Empty State */}
                {service.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-16"
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-md mx-auto border border-cyan-700/30">
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                📝
                            </motion.div>
                            <h3 className="text-2xl font-bold text-cyan-100 mb-2">
                                No Services Posted Yet
                            </h3>
                            <p className="text-cyan-200 mb-6">
                                Start by adding your first service to reach customers
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/addservice"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300"
                                >
                                    Add Your First Service
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Services Table */}
                {service.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Stats Card */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-cyan-700/30">
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-cyan-100">
                                        Service Overview
                                    </h3>
                                    <p className="text-cyan-200">
                                        Total services you've posted
                                    </p>
                                </div>
                                <motion.div
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-center mt-4 sm:mt-0"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-3xl font-bold">{service.length}</div>
                                    <div className="text-cyan-100 text-sm">Active Services</div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Table Container */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-cyan-700/30">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50">
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                #
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Service Name
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Area
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-cyan-700/30">
                                        {service.map((svc, index) => (
                                            <motion.tr
                                                key={svc._id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="hover:bg-cyan-800/20 transition-colors duration-200"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-cyan-100 font-medium">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-cyan-50 font-semibold">
                                                        {svc.serviceName}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-cyan-200">
                                                    {svc.serviceArea}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="bg-cyan-600/30 text-cyan-100 px-3 py-1 rounded-full text-sm font-semibold">
                                                        ৳ {svc.servicePrice}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col sm:flex-row gap-2">
                                                        <motion.div
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Link
                                                                to={`/updateservice/${svc._id}`}
                                                                className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors duration-200"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                                Edit
                                                            </Link>
                                                        </motion.div>
                                                        <motion.div
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <button
                                                                onClick={() => handleDelete(svc._id)}
                                                                className="inline-flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold transition-colors duration-200"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </motion.div>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Add New Service Button */}
                        <motion.div
                            className="text-center mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/addservice"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add New Service
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Servicelist;