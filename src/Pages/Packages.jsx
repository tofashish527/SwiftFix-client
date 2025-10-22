import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Packages() {
  const offers = [
    {
      id: 1,
      title: "$15 Off",
      subtitle: "Plumbing & Water Filter Installation",
      details:
        "Enjoy $15 off when you install a new water filter or complete a plumbing service with SwiftFix. Must be presented at the time of service. Cannot be combined with other offers.",
    },
    {
      id: 2,
      title: "$25 Off",
      subtitle: "AC Servicing & Deep Cleaning Package",
      details:
        "Get your home ready for the season with $25 off a complete AC servicing and cleaning package. Offer valid for first-time customers only. Conditions apply.",
    },
    {
      id: 3,
      title: "$30 Off",
      subtitle: "Full Electrical Safety Check",
      details:
        "Ensure your home’s safety with a professional electrical inspection and get $30 off today. Includes wiring check, socket inspection, and appliance testing.",
    },
  ];

  const workPoints = [
    "We connect you with verified service professionals in your area, ensuring reliability and trust.",
    "Every booking is tracked in real-time, so you can monitor your service status easily.",
    "Our professionals are trained, background-checked, and rated after every service.",
    "We offer flexible scheduling—choose a time that fits your day, and we’ll handle the rest.",
    "SwiftFix provides transparent pricing with no hidden fees. What you see is what you pay.",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-25 pb-10 px-5 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          SwiftFix Packages & Exclusive Offers
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
          Save more while keeping your home in perfect shape! From plumbing to electrical,
          SwiftFix brings you premium services at affordable prices. Grab these limited-time offers
          and experience professional service that truly cares.
        </p>
      </motion.div>

      {/* Offers Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center border-t-8 border-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-5xl font-extrabold text-blue-900 mb-3">
              {offer.title}
            </h2>
            <p className="text-lg text-gray-700 font-semibold mb-4">
              {offer.subtitle}
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-cyan-600 transition-all">
              <NavLink to='/contact'>Liked the Offer?</NavLink>
            </button>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              {offer.details}
            </p>
          </motion.div>
        ))}
      </div>

      {/* How We Work Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">How We Work for You</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          At SwiftFix, we believe great service starts with trust, convenience, and transparency.
          Here’s how our process ensures a smooth and stress-free experience.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-left">
          <ul className="space-y-6">
            {workPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-blue-600 text-xl mt-1" />
                <span className="text-gray-700 leading-relaxed text-base">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
