import React from 'react';
import mobileImage from "../assets/ImageScreen.png";

const App: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={mobileImage} 
        alt="Forbes Logo" 
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};

export default App;
