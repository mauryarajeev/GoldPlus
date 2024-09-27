import React from 'react';
import Sequrity from "../assets/security.png";
import Download from "../assets/download.png";
import shark_tank from "../assets/shark_tanks_footer.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Header Section - Top Assurance Section
const HeaderSection: React.FC = () => {
  return (
    <div className="text-white text-center">
      <img src={Sequrity} alt="Security" className="w-full h-auto object-cover" />
    </div>
  );
};

// Content Section - About Gold Savings Scheme and Features
const ContentSection: React.FC = () => {
  return (
    <div className="bg-[#FFF8E7] py-16 px-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 space-y-12 text-gray-900">
        {/* What is a Gold Savings Scheme */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">What is a Gold Savings Scheme?</h1>
          <p className="leading-relaxed">
            A gold savings scheme or gold investment scheme is a financial instrument that enables individuals to invest in gold systematically over time. At PlusGold, India’s first jewellery savings app, we offer various gold schemes to cater to diverse needs.
          </p>
          <p className="leading-relaxed">
            These schemes work on the principle of accumulating gold gradually, making them accessible to all seeking to invest in gold.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Features of Gold Investment Scheme</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>No Lock-in period:</strong> Withdraw anytime you want.</li>
            <li><strong>Safe & Secure:</strong> Your gold is 100% secured in regulated vaults.</li>
            <li><strong>Instant Withdrawal:</strong> Allows for instant cash withdrawal.</li>
            <li><strong>Flexibility:</strong> Choose one-time or SIP options with added benefits.</li>
          </ul>
        </div>

        {/* Why Invest in Gold Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Why Invest in Gold?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Gold holds its value:</strong> Protects against inflation.</li>
            <li><strong>Higher liquidity:</strong> Faster to sell compared to real estate.</li>
            <li><strong>Easy to Invest:</strong> Invest in physical forms like coins or jewellery.</li>
          </ul>
        </div>

        {/* How to Invest in Gold Scheme */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">How to Invest in Gold Scheme?</h2>
          <p className="leading-relaxed">
            Use the PlusGold app for hassle-free investments in gold with convenience and transparency.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Q: Why invest in gold with PlusGold?</h4>
              <p>Reliable, transparent, and competitive returns on our secure platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Section - Contact Information and Links
const Footer: React.FC = () => {
  return (
    <div className="bg-[#FFF8E7] py-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-800">
        {/* Contact Info */}
        <div className="space-y-4 p-4 space-x-4">
          <h3 className="text-lg font-semibold">PLUS <span style={{color:'#C4963C'}}>GOLD</span></h3>
          <p>B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi School, Nagpur, Maharashtra, 440014</p>
          <p>Email: founders@getplus.in | Phone: +91-9035202565</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-row items-start p-4 space-x-12 justify-between">
  <div className="mb-4">
    <h4 className="text-lg font-semibold" style={{ color: '#9D002B' }}>Plus</h4>
    <ul className="space-y-2">
      <li>About Us</li>
      <li>Partner Jewellers</li>
      <li>Gold Coin</li>
      <li>Career</li>
      <li>Blog</li>
      <li>Privacy Policy</li>
    </ul>
  </div>

  {/* Top Cities */}
  <div>
    <h4 className="text-lg font-semibold" style={{ color: '#9D002B' }}>Top Cities</h4>
    <ul className="space-y-2">
      <li>Bangalore</li>
      <li>Chennai</li>
      <li>Mumbai</li>
      <li>Kolkata</li>
      <li>Delhi</li>
    </ul>
  </div>
</div>

      </div>

      {/* App Store Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img
            src={Download}
            alt="Google Play"
            className="w-80 h-auto"
          />
        </a>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="">
      {/* Header Section */}
      <HeaderSection />
      {/* Main Content */}
      <ContentSection />
      {/* Footer */}
      <Footer />
      <div className="w-screen flex justify-center items-center overflow-hidden">
        <img src={shark_tank} alt="Shark Tank" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default App;
