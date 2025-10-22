import React from "react";
import { FaTools, FaUsers, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImg from "../assets/img/about.jpg"; // add a nice SVG/PNG here

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white pt-15 to-cyan-50 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            About <span className="text-cyan-600">SwiftFix</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            SwiftFix is a modern service-booking platform designed to connect
            users with trusted professionals for household and commercial tasks.
            Whether you need an electrician, cleaner, or plumber — we make it
            simple, reliable, and fast.
          </p>
          <p className="text-gray-600">
            Our mission is to bridge the gap between service providers and
            customers through seamless technology and transparent communication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="SwiftFix Illustration"
            className="w-full max-w-md drop-shadow-xl"
          />
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center space-y-4 hover:scale-105 transition"
          >
            <FaTools className="text-5xl mx-auto text-cyan-300" />
            <h3 className="text-2xl font-bold">Smart Service Management</h3>
            <p className="text-gray-200">
              Providers can add, edit, and manage services efficiently with our
              real-time dashboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center space-y-4 hover:scale-105 transition"
          >
            <FaUsers className="text-5xl mx-auto text-cyan-300" />
            <h3 className="text-2xl font-bold">For Every User</h3>
            <p className="text-gray-200">
              Book trusted professionals in just a few clicks and track your
              ongoing service status anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center space-y-4 hover:scale-105 transition"
          >
            <FaHandshake className="text-5xl mx-auto text-cyan-300" />
            <h3 className="text-2xl font-bold">Reliable Connection</h3>
            <p className="text-gray-200">
              SwiftFix builds trust between users and providers through secure
              communication and transparent booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission Section */}
      {/* <section className="max-w-6xl mx-auto py-20 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        >
          At <span className="font-semibold text-cyan-700">SwiftFix</span>, we
          aim to redefine how people access professional services — making it
          easier, faster, and safer for everyone. We believe in empowering both
          customers and providers with tools that simplify everyday life.
        </motion.p>
      </section> */}

    </div>
  );
};

export default About;
