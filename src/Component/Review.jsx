import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [reviewText, setReviewText] = useState('');
  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (!reviewText.trim()) return alert('Please enter a review.');
    if (ratingValue < 1 || ratingValue > 5)
      return alert('Please give a rating between 1 and 5.');

    setReviews([...reviews, { text: reviewText, rating: ratingValue }]);
    setReviewText('');
    setRatingValue(0);
    setHoverValue(null);
  };

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-800">
      <h1 className='text-center font-bold text-3xl pt-3 pb-5'>Any Suggestion For SwiftFix?</h1>
      <div className="flex flex-col max-w-xl mx-auto p-8 shadow-lg rounded-2xl border border-blue-950 bg-white">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">Your opinion matters!</h2>
          <p className="text-sm text-gray-600 text-center mb-6">Help us improve your experience</p>

          <div className="flex space-x-2 py-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRatingValue(star)}
                onMouseEnter={() => setHoverValue(star)}
                onMouseLeave={() => setHoverValue(null)}
                className="transition-transform duration-200 hover:scale-110"
              >
                <FaStar
                  className={`w-10 h-10 ${star <= (hoverValue || ratingValue) ? "text-yellow-400" : "text-gray-300"}`}
                />
              </button>
            ))}
          </div>

          <div className="w-full mt-4">
            <textarea
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            ></textarea>

            <button
              onClick={handleReviewSubmit}
              className="w-full mt-6 py-3 font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Submit Feedback
            </button>
          </div>

          <div className="mt-4">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Maybe later
            </a>
          </div>
        </div>

        {reviews.length > 0 && (
          <div className="mt-8 w-full">
            <h4 className="text-lg font-semibold mb-3">User Reviews</h4>
            <div className="space-y-3">
              {reviews.map((r, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg">
                    <span className="text-yellow-400">{'★'.repeat(r.rating)}</span>
                    <span className="text-gray-300">{'★'.repeat(5 - r.rating)}</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
