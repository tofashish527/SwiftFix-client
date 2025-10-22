// 

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center pt-28 pb-16 px-5 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We’re here to help! Whether you’re a customer or a service provider,
          reach out for any questions, feedback, or support.
        </p>
      </motion.div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Have any questions or suggestions? We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>House #12, Road #5, Dhanmondi, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+880 1711 123 456</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>support@swiftfix.com</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">
            Send Us a Message
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Find Us on Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-2xl overflow-hidden"
      >
        <h3 className="text-2xl font-semibold text-center text-blue-900 py-6">
          Find Us on Map
        </h3>
        <div className="w-full h-[400px]">
          <iframe
            title="SwiftFix Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.643630204198!2d90.37483577453553!3d23.76134997866895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b93df4ee3db7%3A0x87f2ec726fc03e19!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1717000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
