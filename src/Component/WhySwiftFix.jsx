import Lottie from 'lottie-react';
import why from '../assets/lottieFiles/why.json';
import choose from '../assets/lottieFiles/choose.json';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaShieldAlt, FaHistory, FaBell, FaUndo, FaCreditCard } from 'react-icons/fa';

const WhySwiftFix = () => {
    const features = [
        {
            icon: FaCheck,
            title: "Easy Booking System",
            description: "Schedule any service in just a few clicks. Choose your date, add special instructions, and you're done.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: FaShieldAlt,
            title: "Verified Service Providers",
            description: "All professionals are background-checked and reviewed to ensure the best quality of service.",
            color: "from-blue-500 to-sky-500"
        },
        {
            icon: FaHistory,
            title: "Track Booking History",
            description: "View all your past and pending services with real-time status and provider details.",
            color: "from-sky-500 to-cyan-500"
        },
        {
            icon: FaBell,
            title: "Instant Notifications",
            description: "Receive real-time booking confirmations, reminders, and service updates directly in your inbox.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: FaUndo,
            title: "Flexible Cancellation",
            description: "Plans changed? Cancel or reschedule your service easily with no extra charges.",
            color: "from-blue-500 to-sky-500"
        },
        {
            icon: FaCreditCard,
            title: "Secure Payment Integration",
            description: "Pay safely through our trusted gateways and track your payment history with complete transparency.",
            color: "from-sky-500 to-cyan-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-16">
            {/* Background Decorations */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container max-w-7xl p-6 py-12 mx-auto space-y-24 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
                        Why Choose SwiftFix?
                    </h2>
                    <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                        From minor fixes to professional services, SwiftFix brings reliable help to your doorstep.
                    </p>
                </motion.div>

                {/* First Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:gap-12 lg:grid-cols-2 lg:items-center"
                >
                    <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                            What Makes SwiftFix Stand Out?
                        </h3>
                        <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
                            SwiftFix is built to simplify how you book trusted service providers for your everyday needs — all from one place.
                        </p>

                        <div className="space-y-8">
                            {features.slice(0, 3).map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cyan-800/20 transition-all duration-300 group"
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="text-white text-lg" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-cyan-50 mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-cyan-200 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-10 lg:mt-0 flex justify-center"
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-cyan-600/30">
                            <Lottie 
                                animationData={why} 
                                loop={true} 
                                className="w-full max-w-md"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Second Section - Reversed */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="grid lg:gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="lg:order-2"
                        >
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                                Fully Customized Experience
                            </h3>
                            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
                                SwiftFix offers tailored services based on your area, budget, and needs — making it convenient and efficient.
                            </p>

                            <div className="space-y-8">
                                {features.slice(3).map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cyan-800/20 transition-all duration-300 group"
                                    >
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <feature.icon className="text-white text-lg" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-cyan-50 mb-2">
                                                {feature.title}
                                            </h4>
                                            <p className="text-cyan-200 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-10 lg:mt-0 lg:order-1 flex justify-center"
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-cyan-600/30">
                                <Lottie 
                                    animationData={choose} 
                                    loop={true} 
                                    className="w-full max-w-md"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            
            </div>
        </div>
    );
};

export default WhySwiftFix;