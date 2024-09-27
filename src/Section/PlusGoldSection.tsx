// src/components/PlusGold.js
import React from 'react';
import Image from "../assets/leftImageDesign.png";

const PlusGold = () => {
  return (
    <div className="bg-white py-8 px-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Added items-center */}
        {/* Left Column: Text and Button */}
        <div className="space-y-6 flex flex-col justify-center"> {/* Added flex and justify-center */}
          <h1 className="text-4xl font-bold text-gray-800">Benefits of buying from Plus Gold</h1>
          <p className="text-lg text-gray-600">
            Opting for the Plus Gold Savings Scheme is a smart and easy way to accumulate gold.
            Here's why you should choose our scheme.
          </p>
          <div className="flex items-center space-x-3"> {/* Flex container for alignment */}
            <button className="bg-red-600 text-white py-3 px-4 rounded-lg text-lg font-semibold">
              Start Saving Now
            </button>
            <span className="text-yellow-300 font-semibold text-xl">{`>>>`}</span>
          </div>
        </div>
        {/* Right Column: Cards */}
        <div className="grid grid-cols-1 gap-6">
          <img src={Image} alt="Card" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PlusGold;
