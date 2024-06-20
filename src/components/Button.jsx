import React from "react";

export default function Button({amount, index, onClick}) {
  return (
    <div className="w-fit h-auto ">
      <button  key={index} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={()=> onClick(amount)}
      >
        {amount}
      </button>
    </div>
  );
}
