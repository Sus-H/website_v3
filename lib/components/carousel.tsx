import React, { useState, useEffect } from "react";

export default function Carousel() {
  const slides = [
    "/images/project_images/skylight-1.png",
    "/images/project_images/skylight-2.png",
    "/images/project_images/skylight-3.png",
    "/images/project_images/skylight-4.png",
    "/images/project_images/skylight-5.png",
    "/images/project_images/skylight-6.png",
    "/images/project_images/skylight-7.png",
    "/images/project_images/skylight-8.png",
    "/images/project_images/skylight-9.png",
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative grid justify-center w-full mx-auto">
      {/* Previous Button */}
      {/* <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button> */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Carousel Wrapper */}
      <div className="relative h-64 overflow-hidden rounded-lg md:h-96 w-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-scale-down"
            />
          </div>
        ))}
      </div>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
