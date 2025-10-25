import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const service = useLoaderData();
  const { _id, serviceName, serviceImage, serviceArea, servicePrice, serviceDescription } = service;

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    try {
      const res = await axios.put(`https://b11a11-server-side-tofashish527.vercel.app/services/${_id}`, updatedData);

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Service updated successfully!',
          timer: 1500,
          showConfirmButton: false,
          background: '#0f172a',
          color: '#e2e8f0',
          iconColor: '#10b981'
        });
        navigate('/manageservices');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update failed',
          text: res.data.message,
          background: '#0f172a',
          color: '#e2e8f0',
          confirmButtonColor: '#ef4444'
        });
      }
    } catch (err) {
      console.error('Error updating service:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error updating service',
        text: 'Something went wrong. Please try again.',
        background: '#0f172a',
        color: '#e2e8f0',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-8">
      <Helmet>
        <title>SwiftFix | Update Service</title>
      </Helmet>

      {/* Background Decorations */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-6 relative z-10"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
            Update Service
          </h1>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Modify your service details and reach more customers
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-cyan-600/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleUpdateService} className="space-y-8">

            {/* Service Information */}
            <motion.fieldset 
              className="border border-cyan-600/30 rounded-2xl p-6 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <legend className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4">
                Service Information
              </legend>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-3 text-cyan-100 font-semibold">
                    Service Name *
                  </label>
                  <input 
                    type="text" 
                    name="serviceName" 
                    defaultValue={serviceName} 
                    className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block mb-3 text-cyan-100 font-semibold">
                    Image URL *
                  </label>
                  <input 
                    type="text" 
                    name="imageUrl" 
                    defaultValue={serviceImage} 
                    className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block mb-3 text-cyan-100 font-semibold">
                    Price (৳) *
                  </label>
                  <input 
                    type="number" 
                    name="price" 
                    defaultValue={servicePrice} 
                    className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block mb-3 text-cyan-100 font-semibold">
                    Service Area *
                  </label>
                  <input 
                    type="text" 
                    name="area" 
                    defaultValue={serviceArea} 
                    className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-3 text-cyan-100 font-semibold">
                  Service Description *
                </label>
                <textarea 
                  name="description" 
                  defaultValue={serviceDescription} 
                  className="w-full px-4 py-3 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all duration-300"
                  rows={4} 
                  required 
                />
              </div>
            </motion.fieldset>

            {/* Provider Information */}
            <motion.fieldset 
              className="border border-cyan-600/30 rounded-2xl p-6 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <legend className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4">
                Provider Information
              </legend>
              
              <div>
                <label className="block mb-3 text-cyan-100 font-semibold">
                  Provider Image URL
                </label>
                <input 
                  type="text" 
                  name='ProviderURL' 
                  value={user?.photoURL || ''} 
                  readOnly 
                  className="w-full px-4 py-3 bg-cyan-800/30 border border-cyan-600/30 rounded-2xl text-cyan-300 cursor-not-allowed"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-3 text-cyan-100 font-semibold">
                    Provider Name
                  </label>
                  <input 
                    type="text" 
                    name='ProviderName' 
                    value={user?.displayName || ''} 
                    readOnly 
                    className="w-full px-4 py-3 bg-cyan-800/30 border border-cyan-600/30 rounded-2xl text-cyan-300 cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label className="block mb-3 text-cyan-100 font-semibold">
                    Provider Email
                  </label>
                  <input 
                    type="email" 
                    name='ProviderEmail' 
                    value={user?.email || ''} 
                    readOnly 
                    className="w-full px-4 py-3 bg-cyan-800/30 border border-cyan-600/30 rounded-2xl text-cyan-300 cursor-not-allowed"
                  />
                </div>
              </div>
            </motion.fieldset>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.input 
                type="submit" 
                value="Update Service" 
                className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
              
              <motion.button
                type="button"
                onClick={() => navigate('/manageservices')}
                className="flex-1 py-4 bg-cyan-800/50 hover:bg-cyan-700/70 text-cyan-100 font-bold rounded-2xl border border-cyan-600/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancel
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UpdateService;