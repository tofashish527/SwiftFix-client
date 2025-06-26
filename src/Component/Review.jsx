// import React from 'react';

// const Review = () => {
//     return (
// //         <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
// // 	<div className="flex flex-col items-center w-full">
// // 		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
// // 		<div className="flex flex-col items-center py-6 space-y-3">
// // 			<span className="text-center">How was your experience?</span>
// // 			<div className="flex space-x-3">
// // 				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
// // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
// // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // 					</svg>
// // 				</button>
// // 				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
// // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
// // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // 					</svg>
// // 				</button>
// // 				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
// // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
// // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // 					</svg>
// // 				</button>
// // 				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
// // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
// // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // 					</svg>
// // 				</button>
// // 				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
// // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-400">
// // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
// // 					</svg>
// // 				</button>
// // 			</div>
// // 		</div>
// // 		<div className="flex flex-col w-full">
// // 			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
// // 			<button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600">Leave feedback</button>
// // 		</div>
// // 	</div>
// // 	<div className="flex items-center justify-center">
// // 		<a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-600">Maybe later</a>
// // 	</div>
// // </div>
// <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-800">
//     <h1 className='text-center font-bold text-3xl pt-3 pb-5'>Any Suggestion For SwiftFix?</h1>
//   <div className="flex flex-col max-w-xl mx-auto p-8 shadow-lg rounded-2xl border border-blue-950 bg-white">
    
//     <div className="flex flex-col items-center w-full">
//       <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">Your opinion matters!</h2>
//       <p className="text-sm text-gray-600 text-center mb-6">Help us improve your experience</p>

//       {/* Rating stars */}
//       <div className="flex space-x-2 py-4">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             type="button"
//             title={`Rate ${star} stars`}
//             className="transition-transform duration-200 hover:scale-110"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               className={`w-10 h-10 ${
//                 star <= 4 ? "text-yellow-400" : "text-gray-300"
//               }`}
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//           </button>
//         ))}
//       </div>

//       {/* Feedback textarea */}
//       <div className="w-full mt-4">
//         <textarea
//           rows="4"
//           placeholder="Share your thoughts..."
//           className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         ></textarea>

//         <button className="w-full mt-6 py-3 font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
//           Submit Feedback
//         </button>
//       </div>

//       <div className="mt-4">
//         <a href="#" className="text-sm text-gray-500 hover:underline">
//           Maybe later
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//     );
// };

// export default Review;

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
