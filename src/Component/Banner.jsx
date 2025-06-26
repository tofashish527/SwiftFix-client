
import React from 'react';
import { motion } from "framer-motion";
import ImageSlider from './ImageSlider';

const Banner = () => {
  const heading = "SwiftFix";
  const subheading = "Fast. Reliable. Right at Your Doorstep.";

  return (
    <div className="bg-indigo-50 min-h-screen flex items-center justify-center px-6 mb-5">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1>
            <motion.span
              className="text-5xl font-bold leading-tight"
              initial={{ opacity: 1 }}
              animate={{
                opacity: 1,
                color: ['#c55239', '#3bc0da', '#b80d7f', '#106778'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              {heading}<br />
            </motion.span>

            <motion.span
              className="inline-block text-2xl font-normal mt-4"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              {subheading}
            </motion.span>
          </motion.h1>

          <p className="py-6 text-lg">
            Your one-stop platform for all home and personal service needs.<br />
            We fix the problem so you can focus on what matters.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Right Side - Image Slider */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[600px]">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
