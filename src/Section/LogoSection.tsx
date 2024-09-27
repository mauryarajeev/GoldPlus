import React from 'react';
import forbesLogo from '../assets/logoGroup.png'; // Example logo path
import textLogo from '../assets/textlLogo.png'; // Example logo path

const FeaturedSection = () => {
  return (
    <div className="flex justify-between items-center py-3 px-4 md:px-12 bg-gray-100"> {/* Updated background color */}
      {/* Text Section */}
      <div className="text-left">
        <p className="text-lg font-medium text-gray-700">
          <img src={textLogo} alt="Forbes Logo" className="h-12 object-contain" />
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex space-x-6">
        <img src={forbesLogo} alt="Forbes Logo" className="h-7 object-contain" />
      </div>
    </div>
  );
};

export default FeaturedSection;
