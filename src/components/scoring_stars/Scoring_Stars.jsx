import React, { useState, useEffect } from "react";

const StarRating = ({ title }) => {
  const [rating, setRating] = useState(0);
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

  useEffect(() => {
    // This effect runs whenever the rating changes
    if (isRatingSubmitted) {
      console.log("Rating submitted:", rating);
    }
  }, [rating, isRatingSubmitted]);

  const handleStarClick = (index) => {
    // Clicked on a different star, update the rating
    setRating((prevRating) => index + 1);

    // Set isRatingSubmitted to true when a star is clicked
    setIsRatingSubmitted(true);
  };

  const renderStars = () => {
    return Array.from({ length: 6 }, (_, index) => (
      <span
        key={index}
        onClick={() => handleStarClick(index)}
        className={`cursor-pointer bg-black p-5 text-3xl ${
          index < rating ? "text-yellow-500" : "text-white"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div>
      <div className="mb-4">{renderStars()}</div>
    </div>
  );
};

export default StarRating;
