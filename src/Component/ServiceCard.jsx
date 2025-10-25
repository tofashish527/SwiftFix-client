import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaHeart, FaRegHeart, FaPhone, FaEnvelope, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    serviceArea,
     } = service;

  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorited(favorites.includes(_id));
  }, [_id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.includes(_id)
      ? favorites.filter(fav => fav !== _id)
      : [...favorites, _id];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transform transition-transform">
      
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img 
          src={serviceImage} 
          alt={serviceName}
          className={`w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          {isFavorited ? (
            <FaHeart className="text-red-500 text-xl animate-pulse" />
          ) : (
            <FaRegHeart className="text-gray-600 hover:text-red-500 text-xl transition-colors" />
          )}
        </button>

       
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Price Row */}
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2 group-hover:text-cyan-700 transition-colors">
            {serviceName}
          </h2>
          <div className="text-right ml-2">
            <div className="text-lg font-bold text-cyan-700 dark:text-cyan-400">
              ৳ {servicePrice}
            </div>
              </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
          {serviceDescription}
        </p>

      <div className="flex items-center justify-between mt-2">
  {/* Location - Left */}
  <div className="flex items-center gap-2 text-lime-700 dark:text-lime-400">
    <FaLocationDot className="flex-shrink-0" />
    <span className="text-sm font-medium">{serviceArea}</span>
  </div>

  {/* Features/Tags - Right */}
  <div className="flex flex-wrap gap-2">
    <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs rounded-full font-medium">
      Professional
    </span>
    <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs rounded-full font-medium">
      Verified
    </span>
  </div>
</div>


        {/* Action Button */}
        <Link to={`/services/${_id}`} className="block">
          <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group-hover:shadow-2xl flex items-center justify-center gap-2">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-200 dark:group-hover:border-cyan-800 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default ServiceCard;