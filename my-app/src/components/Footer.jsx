import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              MindEase
            </h2>
            <p className="text-gray-600 text-sm">
              Your journey to mental wellness starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/dashboard" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                🏠 Home
              </a>
              <a href="/journal" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                📝 Journal
              </a>
              <a href="/Feed" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                💬 Wall
              </a>
              <a href="/DailySchedule" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                🧘 Routines
              </a>
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Contact & Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                📧 Contact Us
              </a>
              <a href="#" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                📜 Privacy Policy
              </a>
              <a href="#" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-200">
                📋 Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            © 2025 MindEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 