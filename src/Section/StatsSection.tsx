import React from 'react';
import chartImage from "../assets/chart.png";
const StatsSection: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 lg:w-2/3">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-semibold leading-snug">
        Why <span className="text-yellow-500">GOLD</span> is the safest asset to invest?
      </h1>
      <p className="text-lg lg:text-xl font-light">What the statistics reveal:</p>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard label="Gold Reserves" value="700 tonnes" />
        <StatCard label="Gold Imports (2023)" value="$45.54 billion" />
        <StatCard label="Gold Consumption" value="25% of world" />
      </div>

      {/* Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg font-medium mt-6 self-start">
        Start Saving Now
      </button>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <p className="text-gray-500 text-sm lg:text-base">{label}</p>
      <p className="text-2xl lg:text-3xl font-bold">{value}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 px-8 flex flex-col lg:flex-row lg:p-20 gap-10 justify-center items-start">
      {/* Left Section */}
      <StatsSection />
      {/* Right Section Placeholder */}
      <div className="hidden lg:flex w-1/2 rounded-lg h-1/2">
        <img src={chartImage} alt="Forbes Logo" className="object-contain" />
      </div>
    </div>
  );
};

export default App;
