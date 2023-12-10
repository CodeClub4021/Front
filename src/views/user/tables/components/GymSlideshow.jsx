import React, { useState } from "react";
import image1 from "../../../../assets/img/profile/banner.png";
import image2 from "../../../../assets/img/profile/image2.png";
import image3 from "../../../../assets/img/profile/image3.png";

const GymSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gymImages = [image1, image2, image3];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleSlideClick = () => {
    // Advance to the next slide
    setCurrentSlide((prevSlide) => (prevSlide + 1) % gymImages.length);
  };

  return (
    <div className="relative mb-3 h-96 overflow-hidden rounded-2xl">
      {gymImages.map((image, index) => (
        <div
          key={index}
          className={`absolute h-full w-full bg-cover bg-center transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={handleSlideClick} // Click on the image to advance to the next slide
        ></div>
      ))}

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
        {gymImages.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 cursor-pointer rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400 "
            }`}
            onClick={() => handleDotClick(index)} // Click on the dot to navigate to the selected slide
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GymSlideshow;
