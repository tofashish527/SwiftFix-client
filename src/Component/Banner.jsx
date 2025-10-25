import React from 'react';
import { motion } from "framer-motion";
import ImageSlider from './ImageSlider';
import { NavLink } from 'react-router';

const Banner = () => {
  const heading = "SwiftFix";
  const subheading = "Fast. Reliable. Right at Your Doorstep.";

  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text reveal animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

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
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-sky-900 to-blue-900"></div>
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-cyan-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-sky-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full relative z-10">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                {heading}
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block text-2xl md:text-3xl font-semibold text-white mt-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              {subheading}
            </motion.span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="py-6 text-lg md:text-xl text-cyan-100 leading-relaxed max-w-2xl">
              Your one-stop platform for all home and personal service needs.
              <br />
              We fix the problem so you can focus on what matters.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to='/register'><span className="relative z-10">Get Started</span></NavLink>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 border-2 border-cyan-400 text-white font-semibold rounded-2xl hover:border-cyan-300 hover:text-cyan-200 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to='/about'>Learn More</NavLink>
            </motion.button>
          </motion.div>

          {/* Stats Section */}
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

        {/* Image Slider Section */}
        <motion.div 
          className="flex-1 flex justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-full max-w-[600px] relative"
            variants={itemVariants}
          >
            {/* Floating elements around the slider */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full shadow-lg"
              {...floatingAnimation}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full shadow-lg"
              animate={{
                ...floatingAnimation.animate,
                transition: { ...floatingAnimation.animate.transition, delay: 1 }
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-6 w-4 h-4 bg-sky-400 rounded-full shadow-lg"
              animate={{
                ...floatingAnimation.animate,
                transition: { ...floatingAnimation.animate.transition, delay: 2 }
              }}
            />
            
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <ImageSlider />
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-3xl opacity-20 -z-10"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;