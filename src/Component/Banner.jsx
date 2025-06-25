import React from 'react';

const Banner = () => {
    return (
               <div className="hero bg-blue-100 min-h-screen mb-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
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
    </div>
    <div className='flex-1'>
      {/* <motion.h1 animate={{rotate:180,
    transition:
    { duration:4}
    }} className="text-5xl font-bold">Latest Job Offer!</motion.h1> */}
      <motion.h1 initial={{scale:0}} animate={{scale:1,
    transition:
    {duration:4}
    }} className="text-5xl font-bold">The Easiest Way To Get <motion.span animate={{
        color:['#eab294','#c7ea94','#94eae6','#c494ea'],
        transition:{duration:2,repeat:Infinity}
    }}>Your New</motion.span> JOB!</motion.h1>
      <p className="py-6">
       Each month, more than 3 million job seekers turn to
website in their search for work, making over 140,000
applications every single day.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;