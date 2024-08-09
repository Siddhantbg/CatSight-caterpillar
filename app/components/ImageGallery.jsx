"use client";
import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    "/dozer.png", // Ensure these paths are correct
    "/jcb1.jpg",
    "/excavator.png",
   ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <button
          className="text-2xl p-2 focus:outline-none"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <div className="w-64 h-64 flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="object-cover h-full w-full"
          />
        </div>
        <button
          className="text-2xl p-2 focus:outline-none"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
      <div className="flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
