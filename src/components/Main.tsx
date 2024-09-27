import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 


const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header section */}
      <header className="text-white shadow-md">
        <Header  />
      </header>

      {/* Main content area with sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main content section */}
        <main className="flex-1  bg-transparent overflow-auto">
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
