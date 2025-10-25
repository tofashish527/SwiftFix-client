import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ServiceToDo = () => {
    const { user } = UseAuth();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`https://b11a11-server-side-tofashish527.vercel.app/booking/provider?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setApplications(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user]);

    const handleStatusChange = (e, app_id) => {
        const newStatus = e.target.value;
        axios
            .patch(`https://b11a11-server-side-tofashish527.vercel.app/booking/${app_id}`, {
                status: newStatus,
            })
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Service status updated',
                        showConfirmButton: false,
                        timer: 1500,
                        background: '#0f172a',
                        color: '#e2e8f0',
                        iconColor: '#10b981'
                    });
                    
                    // Update local state
                    setApplications(prev => prev.map(app => 
                        app._id === app_id ? { ...app, serviceStatus: newStatus } : app
                    ));
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Update failed',
                    text: 'Failed to update status',
                    background: '#0f172a',
                    color: '#e2e8f0',
                    confirmButtonColor: '#ef4444'
                });
            });
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return 'bg-green-500/20 text-green-300 border-green-500/30';
            case 'working':
                return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
            case 'in progress':
                return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
            default:
                return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
        }
    };

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return '✅';
            case 'working':
                return '🔧';
            case 'in progress':
                return '🔄';
            default:
                return '⏳';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-8">
            {/* Background Decorations */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
                        Service Requests
                    </h1>
                    <p className="text-cyan-100 text-lg">
                        Manage and track all service requests from customers
                    </p>
                </motion.div>

                {/* Loading State */}
                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
                        <p className="text-cyan-200 mt-4">Loading service requests...</p>
                    </motion.div>
                )}

                {/* Empty State */}
                {!loading && applications.length === 0 && (
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
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                📋
                            </motion.div>
                            <h3 className="text-2xl font-bold text-cyan-100 mb-2">
                                No Service Requests
                            </h3>
                            <p className="text-cyan-200 mb-6">
                                You don't have any service requests yet. They will appear here when customers book your services.
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Applications Table */}
                {!loading && applications.length > 0 && (
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
                                        Total service requests from customers
                                    </p>
                                </div>
                                <motion.div
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-center mt-4 sm:mt-0"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-3xl font-bold">{applications.length}</div>
                                    <div className="text-cyan-100 text-sm">Active Requests</div>
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
                                                Service
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Contact
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Scheduled Date
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Current Status
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Update Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-cyan-700/30">
                                        {applications.map((app, index) => (
                                            <motion.tr
                                                key={app._id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="hover:bg-cyan-800/20 transition-colors duration-200"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-cyan-100 font-medium">
                                                        {index + 1}
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-4">
                                                        
                                                        <div>
                                                            <div className="text-cyan-50 font-semibold">
                                                                {app.serviceName}
                                                            </div>
                                                            {app.instructions && (
                                                                <div className="text-cyan-300 text-xs mt-1 max-w-xs truncate">
                                                                    📝 {app.instructions}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-cyan-200 text-sm">
                                                        {app.userEmail}
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-cyan-100 text-sm">
                                                        {app.takingDate ? new Date(app.takingDate).toLocaleDateString() : 'Not scheduled'}
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-cyan-100 font-semibold">
                                                        ৳ {app.price || 'N/A'}
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <motion.span 
                                                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(app.serviceStatus)}`}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <span>{getStatusIcon(app.serviceStatus)}</span>
                                                        {app.serviceStatus || 'Pending'}
                                                    </motion.span>
                                                </td>
                                                
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <select
                                                        onChange={(e) => handleStatusChange(e, app._id)}
                                                        value={app.serviceStatus || 'pending'}
                                                        className="px-3 py-2 bg-cyan-800/50 border border-cyan-600/50 rounded-xl text-cyan-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                                                    >
                                                        <option value="pending">⏳ Pending</option>
                                                        <option value="working">🔧 Working</option>
                                                        <option value="in progress">🔄 In Progress</option>
                                                        <option value="completed">✅ Completed</option>
                                                    </select>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ServiceToDo;