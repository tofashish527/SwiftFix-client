import React from "react";
import { FaTools, FaUsers, FaHandshake, FaStar, FaClock, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImg from "../assets/img/about.jpg";
import { NavLink } from "react-router";

const About = () => {
    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SwiftFix</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-cyan-100 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            SwiftFix is a modern service-booking platform designed to connect
            users with trusted professionals for household and commercial tasks. 
            Whether you need an electrician, cleaner, or plumber — we make it
            simple, reliable, and fast.
          </motion.p>
          
          <motion.p 
            className="text-cyan-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our mission is to bridge the gap between service providers and
            customers through seamless technology and transparent communication.
          </motion.p>

          {/* Stats */}
            <motion.div 
                      className="flex flex-wrap gap-8 mt-12 justify-center md:justify-start"
                      variants={itemVariants}
                    >
                      <div className="text-center">
                        <motion.div
                          className="text-3xl font-bold text-cyan-400"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          10+
                        </motion.div>
                        <div className="text-cyan-200">Services</div>
                      </div>
                      <div className="text-center">
                        <motion.div
                          className="text-3xl font-bold text-blue-400"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          10k+
                        </motion.div>
                        <div className="text-cyan-200">Happy Customers</div>
                      </div>
                      <div className="text-center">
                        <motion.div
                          className="text-3xl font-bold text-sky-400"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          50+
                        </motion.div>
                        <div className="text-cyan-200">Cities</div>
                      </div>
                    </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <motion.img
              src={aboutImg}
              alt="SwiftFix Illustration"
              className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-cyan-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-cyan-500 text-white p-3 rounded-2xl shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaStar className="text-xl" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-2xl shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <FaShieldAlt className="text-xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative py-10 bg-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaClock,
                title: "Fast Service",
                description: "Quick response times and efficient service delivery"
              },
              {
                icon: FaShieldAlt,
                title: "Secure & Safe",
                description: "Verified providers and secure payment processing"
              },
              {
                icon: FaStar,
                title: "Quality Guaranteed",
                description: "High-quality services with customer satisfaction focus"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center p-6 space-y-4"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-100">{value.title}</h3>
                <p className="text-cyan-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-cyan-200 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the SwiftFix difference today.
          </p>
          <NavLink to='/allservices'> <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button></NavLink>
         
        </div>
      </motion.section>
    </div>
  );
};

export default About;