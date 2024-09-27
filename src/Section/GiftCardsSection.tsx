import React from 'react';
import GiftImage from "../assets/gift.png";
import Heading from "../assets/giftText.png";

const GiftCardsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">
        <img src={Heading} />
        </h1>
        <p className="text-gray-600 mt-4 lg:text-lg">
          Share the love of gold with your loved ones by gifting them this timeless treasure. Its
          beauty and value will forever remind them of your heartfelt affection.
        </p>
        <div className="mt-8 flex space-x-6">
          <button className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-medium">
            Gift Now
          </button>
          <button className="flex items-center space-x-2 text-red-600 text-lg font-medium">
            <span>Watch Video</span> <span>▶</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex flex-col items-center space-y-6">
        {/* Gift Card Image */}
        <div className="relative">
          <img
            src={GiftImage}
            alt="Gold Gift Card"
          />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFF4E6] to-[#FAECD8]">
      <GiftCardsSection />
    </div>
  );
};

export default App;
