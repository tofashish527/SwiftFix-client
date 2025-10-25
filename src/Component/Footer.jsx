import React from 'react';
import logoo from '../assets/img/logoo.png';
import { FaSquareGithub } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 text-cyan-100">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={logoo} alt="SwiftFix Logo" className="h-16 w-auto" />
                            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                SwiftFix
                            </span>
                        </div>
                        <p className="text-cyan-200 leading-relaxed max-w-xs">
                            Your trusted partner for all home and professional services. Fast, reliable, and right at your doorstep.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {[
                                { icon: FaFacebookSquare, href: "#", color: "hover:text-blue-400" },
                                { icon: BsLinkedin, href: "#", color: "hover:text-blue-400" },
                                { icon: FaSquareGithub, href: "#", color: "hover:text-gray-300" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    className={`text-cyan-300 ${social.color} transition-all duration-300`}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="font-bold text-lg text-cyan-50 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'About', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href="#" 
                                        className="text-cyan-200 hover:text-cyan-50 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="font-bold text-lg text-cyan-50 uppercase tracking-wider">Our Services</h3>
                        <ul className="space-y-3">
                            {['AC Repair', 'Plumbing', 'Electrical', 'Appliance Repair', 'Cleaning', 'Carpentry'].map((service, index) => (
                                <li key={index}>
                                    <a 
                                        href="#" 
                                        className="text-cyan-200 hover:text-cyan-50 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="font-bold text-lg text-cyan-50 uppercase tracking-wider">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" />
                                <span className="text-cyan-200 text-sm">House #12, Road #5, Dhanmondi, Dhaka</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-cyan-400 flex-shrink-0" />
                                <span className="text-cyan-200 text-sm">+880 1711 123 456</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                                <span className="text-cyan-200 text-sm">support@swiftfix.com</span>
                            </div>
                        </div>
                        
                        {/* Newsletter Signup */}
                        <div className="pt-4">
                            <h4 className="font-semibold text-cyan-50 mb-3">Stay Updated</h4>
                            <div className="flex space-x-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="flex-1 px-3 py-2 bg-cyan-800/50 border border-cyan-600/50 rounded-lg text-cyan-100 placeholder-cyan-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                                >
                                    Join
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-cyan-700/30 pt-6"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-cyan-300 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} SwiftFix | Developed by Tofashish Nujum. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-cyan-300 hover:text-cyan-50 transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-cyan-300 hover:text-cyan-50 transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="text-cyan-300 hover:text-cyan-50 transition-colors duration-300">Cookie Policy</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="relative">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute bottom-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400 rounded-full blur-xl"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;