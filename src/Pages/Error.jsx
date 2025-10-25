import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>SwiftFix | Page Not Found</title>
            </Helmet>

            {/* Background Decorations */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-2xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-cyan-600/30 shadow-2xl"
                >
                    {/* Error Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                                <FaExclamationTriangle className="text-white text-5xl" />
                            </div>
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                            >
                                <span className="text-white font-bold text-sm">!</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Error Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            404
                        </h1>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-50">
                            Oops! Page Not Found
                        </h2>
                        
                        <p className="text-cyan-200 text-lg leading-relaxed max-w-md mx-auto">
                            It seems the page you're looking for doesn't exist or has been moved. 
                            Don't worry, our services are still running smoothly!
                        </p>

                        {/* Error Details */}
                        <div className="bg-cyan-800/30 rounded-2xl p-6 border border-cyan-600/30">
                            <p className="text-cyan-300 text-sm mb-3">What might have happened?</p>
                            <ul className="text-cyan-200 text-sm space-y-2 text-left max-w-xs mx-auto">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    The page may have been moved or deleted
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    You might have typed the wrong URL
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    Temporary technical issue
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NavLink
                                    to="/"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
                                >
                                    <FaHome className="text-lg" />
                                    Back to Homepage
                                </NavLink>
                            </motion.div>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-800/50 hover:bg-cyan-700/70 text-cyan-100 font-bold rounded-2xl border border-cyan-600/50 transition-all duration-300"
                            >
                                <FaArrowLeft className="text-lg" />
                                Go Back
                            </motion.button>
                        </motion.div>

                        {/* Support Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-6 border-t border-cyan-700/30"
                        >
                            <p className="text-cyan-300 text-sm">
                                Need help?{' '}
                                <NavLink 
                                    to="/contact" 
                                    className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                                >
                                    Contact our support team
                                </NavLink>
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-20 -left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -top-20 -right-20 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
                />
            </div>
        </div>
    );
};

export default Error;