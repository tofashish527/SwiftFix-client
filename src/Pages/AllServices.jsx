import React, { useEffect, useState } from 'react';
import ServiceCard from '../Component/ServiceCard';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch services once
  useEffect(() => {
    setIsLoading(true);
    fetch("https://b11a11-server-side-tofashish527.vercel.app/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  // Filter + Sort whenever searchText, sortOrder, or services change
  useEffect(() => {
    let filtered = services.filter(service =>
      service.serviceName.toLowerCase().includes(searchText.toLowerCase())
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.servicePrice - b.servicePrice);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.servicePrice - a.servicePrice);
    }

    setFilteredServices(filtered);
  }, [searchText, services, sortOrder]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-8">
      <Helmet>
        <title>SwiftFix | All Services</title>
        <meta name="description" content="Browse all available services on SwiftFix." />
      </Helmet>

      {/* Header Section */}
      <motion.div 
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          All Services
        </motion.h1>
        <motion.p 
          className="text-xl text-cyan-100 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our comprehensive range of professional services
        </motion.p>
        
        {/* Decorative Line */}
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Search + Sort Controls */}
      <motion.div 
        className="max-w-4xl mx-auto mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-cyan-700/30">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Search box */}
            <div className="flex-1 w-full">
              <div className="relative">
                <motion.input
                  type="text"
                  className="w-full px-6 py-4 bg-cyan-800/50 border border-cyan-600 rounded-2xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="🔍 Search services by name..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  whileFocus={{ scale: 1.02 }}
                />
                {searchText && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setSearchText("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-300 hover:text-white transition-colors"
                  >
                    ✕
                  </motion.button>
                )}
              </div>
            </div>

            {/* Sort dropdown */}
            <div className="w-full lg:w-64">
              <motion.select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-6 py-4 bg-cyan-800/50 border border-cyan-600 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 appearance-none"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="" className="bg-cyan-900">Sort by Price</option>
                <option value="asc" className="bg-cyan-900">💰 Low to High</option>
                <option value="desc" className="bg-cyan-900">💎 High to Low</option>
              </motion.select>
            </div>
          </div>

          {/* Results Count */}
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-cyan-200 font-medium">
              {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} found
              {searchText && ` for "${searchText}"`}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Loading State */}
      {isLoading && (
        <motion.div 
          className="max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-cyan-800/30 rounded-2xl p-6 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 bg-cyan-700/50 rounded-xl mb-4"></div>
              <div className="h-6 bg-cyan-700/50 rounded mb-2"></div>
              <div className="h-4 bg-cyan-700/50 rounded mb-4"></div>
              <div className="h-10 bg-cyan-700/50 rounded"></div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Services Grid */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="services-grid"
            className="max-w-7xl mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service._id}
                    variants={itemVariants}
                    layout
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 max-w-md mx-auto border border-cyan-700/30">
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
                    🔍
                  </motion.div>
                  <h3 className="text-2xl font-bold text-cyan-100 mb-2">
                    No services found
                  </h3>
                  <p className="text-cyan-200 mb-6">
                    {searchText ? `No services match "${searchText}"` : 'No services available at the moment'}
                  </p>
                  {searchText && (
                    <motion.button
                      onClick={() => setSearchText("")}
                      className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Clear Search
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AllServices;