import React, { use } from 'react';
import BookingRow from './BookingRow';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const BookingList = ({ myBookingPromise }) => {
    const myBooking = use(myBookingPromise);

    return (
        <div className=" bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 ">
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
                        Your Bookings
                    </h1>
                    <p className="text-cyan-100 text-lg">
                        Track and manage all your service bookings
                    </p>
                </motion.div>

                {/* Empty State */}
                {myBooking.length === 0 && (
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
                                📋
                            </motion.div>
                            <h3 className="text-2xl font-bold text-cyan-100 mb-2">
                                No Bookings Yet
                            </h3>
                            <p className="text-cyan-200 mb-6">
                                Start exploring our services and book your first service today!
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/allservices"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300"
                                >
                                    Explore Services
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Bookings Table */}
                {myBooking.length > 0 && (
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
                                        Booking Overview
                                    </h3>
                                    <p className="text-cyan-200">
                                        Total services you've booked
                                    </p>
                                </div>
                                <motion.div
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-center mt-4 sm:mt-0"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-3xl font-bold">{myBooking.length}</div>
                                    <div className="text-cyan-100 text-sm">Active Bookings</div>
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
                                                Service Image
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Service Name
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Provider Name
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Provider Email
                                            </th>
                                            <th className="px-6 py-4 text-left text-cyan-100 font-bold text-sm uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-cyan-700/30">
                                        {myBooking.map((booking, index) => (
                                            <BookingRow
                                                key={booking._id}
                                                index={index}
                                                booking={booking}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Book More Services Button */}
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
                                    to="/allservices"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Book More Services
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BookingList;