import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Main Page Content */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
