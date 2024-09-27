import React from 'react';
import LogogSection from "../Section/LogoSection";
import PlusGoldSecton from '../Section/PlusGoldSection';
import PurChaseCardSection from "../Section/PurchaseCardSection";
import StatsSection from "../Section/StatsSection";
import SavingSection from "../Section/SavingSection";
import GiftCardsSection from "../Section/GiftCardsSection";
import DownloadAppSection from "../Section/DownloadAppSection";
import Footer from "../Section/Footer";
import powered_1 from "../assets/powered_1.png";
import powered_2 from "../assets/powered_2.svg";
import powered_3 from "../assets/powered_3.png";
import vector from "../assets/Vector.png";
import girlImage from "../assets/girlImage.png";

const AdBanner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-50 pt-12 px-6 md:px-12">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Save in <span className="text-yellow-500">GOLD</span><br /> with 21%* Extra
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mt-6">
            <button className="px-8 py-3 bg-red-600 text-white rounded-full text-lg">
              Start Saving Now
            </button>
            <p className="mt-4 md:mt-0 md:ml-4 px-8 py-3 bg-white text-black rounded-full">
              Trusted by 3 Lakh+ Indians
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <p className='text-black'>Powered By</p>
            <img src={powered_1} alt="Augmont Logo" className="w-16 md:w-18" />
            <img src={powered_2} alt="Cashfree Payments Logo" className="w-16 md:w-18" />
            <img src={powered_3} alt="NPCI Logo" className="w-16 md:w-18" />
          </div>
        </div>

        {/* Adjusted for mobile responsiveness */}
        <div className="w-full md:w-1/2 relative mt-6 md:mt-0 flex justify-center">
          <div className="hidden md:block absolute inset-0" style={{
            backgroundImage: `url('${vector}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
          }}></div>
          <img
            src={girlImage}
            alt="Ad Banner"
            className="w-full h-auto object-contain relative z-10"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>

      <LogogSection />
      <div className="w-full">
        <PlusGoldSecton />
      </div>
      <PurChaseCardSection />
      <StatsSection />
      <SavingSection />
      <GiftCardsSection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default AdBanner;
