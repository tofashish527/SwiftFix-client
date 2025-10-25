import React from 'react';
import { motion } from 'framer-motion';

const BookingRow = ({ index, booking }) => {
    const { serviceImage, serviceName, providerName, providerEmail, serviceStatus = 'pending' } = booking;

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-500/20 text-green-300 border-green-500/30';
            case 'in progress':
                return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
            case 'cancelled':
                return 'bg-red-500/20 text-red-300 border-red-500/30';
            default:
                return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
        }
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return '✅';
            case 'in progress':
                return '🔄';
            case 'cancelled':
                return '❌';
            default:
                return '⏳';
        }
    };

    return (
        <motion.tr
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="hover:bg-cyan-800/20 transition-colors duration-200 border-b border-cyan-700/30 last:border-b-0"
        >
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-cyan-100 font-medium">
                    {index + 1}
                </div>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                    <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-lg">
                            <img 
                                src={serviceImage} 
                                alt={serviceName}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/56x56/0f172a/64748b?text=📷';
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-cyan-50 font-semibold text-lg">
                    {serviceName}
                </div>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-cyan-100 font-medium">
                    {providerName}
                </div>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-cyan-200 text-sm">
                    {providerEmail}
                </div>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <motion.span 
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(serviceStatus)}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <span>{getStatusIcon(serviceStatus)}</span>
                    {serviceStatus.charAt(0).toUpperCase() + serviceStatus.slice(1)}
                </motion.span>
            </td>
        </motion.tr>
    );
};

export default BookingRow;