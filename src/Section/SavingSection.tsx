import React from 'react';
import SavingImage from "../assets/saving.png";

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 p-12"> {/* Add padding around the image */}
      <img
        src={SavingImage}
        alt="Saving"
        // Shrink width to 91% and center the image
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default App;
