import React, { useState } from 'react';
import { FaStar, FaPaperPlane, FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';

const Review = () => {
  const [reviewText, setReviewText] = useState('');
  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (!reviewText.trim()) {
      alert('Please enter a review.');
      return;
    }
    if (ratingValue < 1 || ratingValue > 5) {
      alert('Please give a rating between 1 and 5.');
      return;
    }

    setReviews([...reviews, { text: reviewText, rating: ratingValue }]);
    setReviewText('');
    setRatingValue(0);
    setHoverValue(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-sky-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
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
        className="text-center mb-12 relative z-10"
      >
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
          Share Your Experience
        </h1>
        <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
          Your feedback helps us improve and serve you better
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-600/30 shadow-2xl"
        >
          <div className="flex flex-col items-center w-full">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-cyan-50 mb-2">Your Opinion Matters!</h2>
              <p className="text-cyan-200 text-lg">Help us improve your SwiftFix experience</p>
            </motion.div>

            {/* Rating Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-center"
            >
              <p className="text-cyan-100 text-lg mb-4">How would you rate your experience?</p>
              <div className="flex justify-center space-x-2 py-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    onClick={() => setRatingValue(star)}
                    onMouseEnter={() => setHoverValue(star)}
                    onMouseLeave={() => setHoverValue(null)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="transition-all duration-200"
                  >
                    <FaStar
                      className={`w-12 h-12 ${star <= (hoverValue || ratingValue) ? "text-yellow-400 drop-shadow-lg" : "text-cyan-700"}`}
                    />
                  </motion.button>
                ))}
              </div>
              {ratingValue > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyan-300 text-sm mt-2"
                >
                  {ratingValue} star{ratingValue > 1 ? 's' : ''} selected
                </motion.p>
              )}
            </motion.div>

            {/* Review Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full mb-6"
            >
              <label className="block text-cyan-100 text-lg font-semibold mb-4 text-center">
                Share your thoughts with us
              </label>
              <textarea
                rows="5"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="What did you like about SwiftFix? How can we improve?..."
                className="w-full p-6 bg-cyan-800/50 border border-cyan-600/50 rounded-2xl text-cyan-100 placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all duration-200 backdrop-blur-sm"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              onClick={handleReviewSubmit}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-md py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-all duration-200"
            >
              <FaPaperPlane className="text-lg" />
              Submit Feedback
            </motion.button>

            {/* Later Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6"
            >
              <button className="text-cyan-300 hover:text-cyan-200 text-sm transition-colors duration-200">
                Maybe later
              </button>
            </motion.div>
          </div>

          {/* User Reviews Section */}
          {reviews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-cyan-700/30"
            >
              <h4 className="text-2xl font-bold text-cyan-50 mb-6 text-center">User Reviews</h4>
              <div className="grid gap-4">
                {reviews.map((r, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-cyan-800/30 backdrop-blur-sm rounded-2xl border border-cyan-600/20 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`w-5 h-5 ${star <= r.rating ? "text-yellow-400" : "text-cyan-700"}`}
                          />
                        ))}
                      </div>
                      <span className="text-cyan-300 text-sm">
                        {r.rating} star{r.rating > 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-cyan-100 leading-relaxed">{r.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;