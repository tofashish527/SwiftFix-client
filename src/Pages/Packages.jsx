import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router";

export default function Packages() {
  const offers = [
    {
      id: 1,
      title: "$15 Off",
      subtitle: "Plumbing & Water Filter Installation",
      details: "Enjoy $15 off when you install a new water filter or complete a plumbing service with SwiftFix. Must be presented at the time of service. Cannot be combined with other offers.",
      icon: "💧",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "$25 Off",
      subtitle: "AC Servicing & Deep Cleaning Package",
      details: "Get your home ready for the season with $25 off a complete AC servicing and cleaning package. Offer valid for first-time customers only. Conditions apply.",
      icon: "❄️",
      gradient: "from-blue-500 to-sky-600"
    },
    {
      id: 3,
      title: "$30 Off",
      subtitle: "Full Electrical Safety Check",
      details: "Ensure your home's safety with a professional electrical inspection and get $30 off today. Includes wiring check, socket inspection, and appliance testing.",
      icon: "⚡",
      gradient: "from-sky-500 to-cyan-600"
    },
  ];

  const workPoints = [
    {
      icon: FaUsers,
      text: "We connect you with verified service professionals in your area, ensuring reliability and trust.",
      color: "text-cyan-400"
    },
    {
      icon: FaClock,
      text: "Every booking is tracked in real-time, so you can monitor your service status easily.",
      color: "text-blue-400"
    },
    {
      icon: FaShieldAlt,
      text: "Our professionals are trained, background-checked, and rated after every service.",
      color: "text-sky-400"
    },
    {
      icon: FaStar,
      text: "We offer flexible scheduling—choose a time that fits your day, and we'll handle the rest.",
      color: "text-cyan-400"
    },
    {
      icon: FaCheckCircle,
      text: "SwiftFix provides transparent pricing with no hidden fees. What you see is what you pay.",
      color: "text-blue-400"
    },
    {
  icon: FaHeart,
  text: "Customer satisfaction is our top priority with 24/7 support and guaranteed service quality.",
  color: "text-blue-400"
}
  ];

 

  return (
    <div className=" bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 pt-10 pb-10 px-5 md:px-20">
      {/* Background Decorations */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-sky-400 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
          SwiftFix Packages & Exclusive Offers
        </h1>
        <p className="text-cyan-100 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Save more while keeping your home in perfect shape! From plumbing to electrical,
          SwiftFix brings you premium services at affordable prices. Grab these limited-time offers
          and experience professional service that truly cares.
        </p>
      </motion.div>


      {/* Offers Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-20 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">{offer.icon}</div>
              
              {/* Content */}
              <h2 className="text-4xl font-bold text-cyan-50 text-center mb-3">
                {offer.title}
              </h2>
              <p className="text-lg text-cyan-100 font-semibold text-center mb-4">
                {offer.subtitle}
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center mb-4"
              >
                <NavLink 
                  to='/contact'
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg"
                >
                  Claim Offer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              </motion.div>
              
              <p className="text-cyan-200 text-sm leading-relaxed text-center">
                {offer.details}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How We Work Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            How We Work for You
          </h2>
          <p className="text-cyan-100 max-w-2xl mx-auto text-lg leading-relaxed">
            At SwiftFix, we believe great service starts with trust, convenience, and transparency.
            Here's how our process ensures a smooth and stress-free experience.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-cyan-700/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cyan-800/20 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-2xl bg-cyan-800/50 group-hover:scale-110 transition-transform duration-300 ${point.color}`}>
                  <point.icon className="text-xl" />
                </div>
                <span className="text-cyan-100 leading-relaxed text-base flex-1">
                  {point.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

     
    </div>
  );
}