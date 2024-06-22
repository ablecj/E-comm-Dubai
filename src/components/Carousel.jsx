import React, { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="relative w-full  mx-auto flex justify-center  ">
      <div className="overflow-hidden relative sm:h-[350px] h-[200px]  sm:w-full w-[90%] rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform  ${
              index === currentIndex ? 'translate-x-0' : index > currentIndex ? 'translate-x-full' : '-translate-x-full'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            
          </div>
        ))}
        <h1 className='relative top-[10%] ml-[6%] text-white text-[28px] '>These are the slides</h1>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
       <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaAngleRight />
      </button>
    </div>
  )
}
