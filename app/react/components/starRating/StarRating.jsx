import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
            className={i <= rating ? 'rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full' : 'rating-star flex cursor-pointer mr-[5px] last:mr-0 '}
            key={i}
            onClick={() => handleStarClick(i)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                           <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
                                           <defs>
                                                 <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
                                                     <stop stopColor="#FB9B41"></stop>
                                                     <stop offset="1" stopColor="#F2B96D"></stop>
                                                 </linearGradient>
                                             </defs>
                                         </svg>
        </span>
      );
    }

    return stars;
  };


//   <div className="rating flex justify-center items-center w-full mx-auto">
//                                     <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
//                                             <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
//                                             <defs>
//                                                 <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
//                                                     <stop stopColor="#FB9B41"></stop>
//                                                     <stop offset="1" stopColor="#F2B96D"></stop>
//                                                 </linearGradient>
//                                             </defs>
//                                         </svg>
//                                     </span>
//                                     <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
//                                             <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
//                                             <defs>
//                                                 <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
//                                                     <stop stopColor="#FB9B41"></stop>
//                                                     <stop offset="1" stopColor="#F2B96D"></stop>
//                                                 </linearGradient>
//                                             </defs>
//                                         </svg>
//                                     </span>
//                                     <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
//                                             <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
//                                             <defs>
//                                                 <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
//                                                     <stop stopColor="#FB9B41"></stop>
//                                                     <stop offset="1" stopColor="#F2B96D"></stop>
//                                                 </linearGradient>
//                                             </defs>
//                                         </svg>
//                                     </span>
//                                     <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 rating-full">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
//                                             <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
//                                             <defs>
//                                                 <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
//                                                     <stop stopColor="#FB9B41"></stop>
//                                                     <stop offset="1" stopColor="#F2B96D"></stop>
//                                                 </linearGradient>
//                                             </defs>
//                                         </svg>
//                                     </span>
//                                     <span className="rating-star flex cursor-pointer mr-[5px] last:mr-0 ">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
//                                             <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#ECECEC"></path>
//                                             <defs>
//                                                 <linearGradient id="paint0_linear_33_44806" x1="-0.5" y1="12.4138" x2="23.5" y2="12.4138" gradientUnits="userSpaceOnUse">
//                                                     <stop stopColor="#FB9B41"></stop>
//                                                     <stop offset="1" stopColor="#F2B96D"></stop>
//                                                 </linearGradient>
//                                             </defs>
//                                         </svg>
//                                     </span>
//                                 </div>

  return (
    <div className="rating flex justify-center items-center w-full mx-auto">
      {renderStars()}
    </div>
  );
};

export default StarRating;