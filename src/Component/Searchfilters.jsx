// import React from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaMapMarkerAlt, FaFilter, FaCrosshairs, FaUserCheck, FaExclamationTriangle } from "react-icons/fa";

// export default function Searchfilters({
//   searchTerm,
//   setSearchTerm,
//   selectedDistrict,
//   setSelectedDistrict,
//   selectedService,
//   setSelectedService,
//   districts,
//   allServices,
//   getUserLocation,
//   clearUserLocation,
//   userLocation,
//   isLocating,
//   locationError,
// }) {
//   return (
//     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Location Finder */}
//         <div>
//           <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
//             <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FaCrosshairs /> Find My Location</h3>
//             <p className="text-green-100 mb-4">
//               {userLocation ? "We found your location! Showing nearest service centers." : "Click to detect your location and find nearby centers."}
//             </p>

//             {!userLocation ? (
//               <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={getUserLocation} disabled={isLocating} className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
//                 {isLocating ? <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" /> : <FaCrosshairs />} 
//                 {isLocating ? "Locating..." : "Detect My Location"}
//               </motion.button>
//             ) : (
//               <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={clearUserLocation} className="w-full bg-white/20 text-white py-2 rounded-xl font-semibold hover:bg-white/30">
//                 Clear Location
//               </motion.button>
//             )}

//             {locationError && (
//               <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm flex items-center gap-2">
//                 <FaExclamationTriangle />
//                 {locationError}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Search Inputs */}
//         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="relative">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input type="text" placeholder="Search locations..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div className="relative">
//             <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="all">All Districts</option>
//               {districts.map((d) => <option key={d} value={d}>{d}</option>)}
//             </select>
//           </div>

//           <div className="relative">
//             <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="all">All Services</option>
//               {allServices.map((s) => <option key={s} value={s}>{s}</option>)}
//             </select>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
