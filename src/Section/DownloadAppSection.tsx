import React from 'react';
import Iphone from "../assets/iphone.png";
import Download from "../assets/download.png";

const DownloadAppSection: React.FC = () => {
  return (
    <div className="mx-auto py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between bg-white rounded-xl shadow-lg space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">
          Download the App
        </h1>
        <p className="text-gray-600 text-base lg:text-lg">
          Plus, a revolutionary app that helps Indian homemakers to pre-plan their jewellery
          purchase by saving monthly & gaining 10% IRR.
        </p>

        {/* App Store Buttons */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src={Download}
              alt="Google Play"
              className="w-40 h-auto lg:w-80"
            />
          </a>
        </div>
      </div>

      {/* Right Section - App Preview */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src={Iphone}
          alt="App Mockup"
          className="w-64 h-auto lg:w-auto"
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <DownloadAppSection />
    </div>
  );
};

export default App;
