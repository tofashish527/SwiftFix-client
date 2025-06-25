import React from 'react';
import { motion } from "motion/react"

const Banner = () => {

    const heading = "SwiftFix";
    const subheading = "Fast. Reliable. Right at Your Doorstep.";
    return (
               <div className="hero bg-indigo-50 min-h-screen mb-5">
  <div className="hero-content">
    {/* <div className='flex-1'>
         <motion.img
      src={team1}
       animate={{y:[100,150,100]}}
       transition={{duration:4,repeat:Infinity}}
      className="max-w-sm border-s-8 border-b-8 border-blue-900 rounded-t-[40px] rounded-b-[40px] shadow-2xl"
    />
     <motion.img
      src={team2}
       animate={{x:[100,150,100]}}
       transition={{duration:8,delay:3,repeat:Infinity}}
      className="max-w-sm border-s-8 border-b-8 border-blue-900 rounded-t-[40px] rounded-b-[40px] shadow-2xl"
    /> 
    </div> */}
    <div className=''>
      {/* <motion.h1 initial={{scale:0}} animate={{scale:1,
    transition:
    {duration:4}
    }} className="text-5xl font-bold">SwiftFix <br>
    </br><span className='text-2xl'>Fast. Reliable. Right at Your Doorstep.</span></motion.h1> */}
       {/* <motion.h1
        className="text-5xl font-bold leading-tight flex flex-wrap justify-center gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 100,
                  duration: 10,
                },
              },
            }}
          >
            {heading}<br></br>
            {subheading}
          </motion.span>
      </motion.h1> */}
       {/* <motion.h1
        className="text-5xl font-bold leading-tight flex flex-col items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // more delay between heading and subheading
            },
          },
        }}
      >
        {/* Heading */}
        {/* <motion.span
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.8,     // strong bounce (range: 0 to 1)
                duration: 1000,   // long duration
                repeat: Infinity,
              },
            },
          }}
        >
          {heading}
        </motion.span> */}

        {/* Subheading */}
        {/* <motion.span
          className="inline-block text-2xl font-normal"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.8,
                duration: 1000,
                repeat: Infinity,
              },
            },
          }}
        >
          {subheading}
        </motion.span> 
      </motion.h1> */}
        <motion.h1
        className="text-5xl font-bold leading-tight flex flex-col items-center gap-2"
      >
        {/* Heading with infinite bounce */}
        <motion.span
          className="inline-block"
          animate={{
            y: [0, -10, 0], // up, down, back to position
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {heading}
        </motion.span>

        {/* Subheading with slower infinite bounce */}
        <motion.span
          className="inline-block text-2xl font-normal"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1, // slight delay to desync from main heading
          }}
        >
          {subheading}
        </motion.span>
      </motion.h1>
      <p className="py-6">
       Your one-stop platform for all home and personal service needs.<br></br>We fix the problem so you can focus on what matters.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;