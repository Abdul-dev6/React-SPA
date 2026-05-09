import React, { useState } from "react";
import sl1 from "../../../assets/photos/sl1.jpg";
import sl2 from "../../../assets/photos/sl2.jpg";
import sl3 from "../../../assets/photos/sl3.jpg";
import sl4 from "../../../assets/photos/sl4.jpg";
import sl5 from "../../../assets/photos/sl5.jpg";

function ImageCarousel() {
  const slides = [sl1, sl2, sl3, sl4, sl5];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-[96%] ml-5 mb-5">
      {/* Carousel images */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-base">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute block w-full h-full object-cover top-0 left-0 transition-all duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
          &#8592;
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
          &#8594;
        </span>
      </button>
    </div>
  );
}

export default ImageCarousel;
