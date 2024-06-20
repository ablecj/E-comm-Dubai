import React from "react";

export default function Card({ image, title, description}) {

  return (

    <div className="max-w-sm h-96 rounded overflow-hidden shadow-lg mt-5 flex flex-col">
    <img
      className="w-full h-48 object-cover"
      src={image}
      alt={title}
    />
    <div className="px-1 py-1 flex-grow flex flex-col justify-between">
      <div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base truncate-text">
          {description}
        </p>
      </div>
    </div>
  </div>
  );
}
