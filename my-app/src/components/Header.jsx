import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo/Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              MindEase
            </h1>
          </div>

          {/* Center - Navigation Links */}
          <nav className="hidden md:flex space-x-1">
            <a 
              href="/dashboard" 
              className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
            >
              🏠 Home
            </a>
            <a 
              href="/journal" 
              className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
            >
              📝 Journal
            </a>
            <a 
              href="/Feed" 
              className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
            >
              💬 Wall
            </a>
            <a 
              href="/DailySchedule" 
              className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
            >
              🧘 Routines
            </a>
          </nav>

          {/* Right side - Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigate('/uplift')}
              className="bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl px-5 py-2.5 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <span>🌟</span>
              <span>Uplift Me</span>
            </button>

            {/* Profile Section */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl px-4 py-2.5 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
              >
                <span className="text-lg">👤</span>
                <span className="text-sm">Profile</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-10 border border-gray-100">
                  <a 
                    href="/profile" 
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <span>👤</span>
                    <span>View Profile</span>
                  </a>
                  <a 
                    href="/settings" 
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <span>⚙️</span>
                    <span>Settings</span>
                  </a>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('token');
                      navigate('/login');
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <span>🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <a 
                href="/dashboard" 
                className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
              >
                🏠 Home
              </a>
              <a 
                href="/journal" 
                className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
              >
                📝 Journal
              </a>
              <a 
                href="/Feed" 
                className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
              >
                💬 Wall
              </a>
              <a 
                href="/DailySchedule" 
                className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
              >
                🧘 Routines
              </a>
              <button 
                onClick={() => navigate('/uplift')}
                className="text-left bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl px-4 py-2.5 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span>🌟</span>
                <span>Uplift Me</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 