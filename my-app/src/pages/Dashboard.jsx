import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/dashboard.css';
import brain1 from '../assets/brain1.svg.png';
import brain2 from '../assets/brain2.svg.png';

const UserDashboard = () => {
  const navigate = useNavigate();
  const brainImages = [brain1, brain2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % brainImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Full-Screen Background */}
      <div className="relative min-h-screen">
        {/* Background Image Layer */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1950&q=80")',
            opacity: '0.85'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/70 via-purple-50/50 to-purple-50/70" />

        {/* Main Content Container */}
        <div className="relative min-h-screen">
          {/* Welcome Section */}
          <div className="pt-20 pb-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-slate-800 mb-4">Welcome back, Friend! 👋</h1>
              <p className="text-xl text-gray-600">Take a deep breath. Let's make today a little better.</p>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="max-w-6xl mx-auto px-6 pb-12">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <button 
                onClick={() => navigate('/Feed')}
                className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📖</span>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">Journal Now</h3>
                  <p className="text-gray-600">Express your thoughts and feelings</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/Uplift')}
                className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌟</span>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">Get Uplifted</h3>
                  <p className="text-gray-600">Find inspiration and motivation</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/Feed')}
                className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💬</span>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">Support Wall</h3>
                  <p className="text-gray-600">Connect with the community</p>
                </div>
              </button>

              <button 
                onClick={() => navigate('/DailySchedule')}
                className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🧘</span>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">My Routines</h3>
                  <p className="text-gray-600">Track your daily wellness habits</p>
                </div>
              </button>
            </div>

            {/* Tip of the Day Card */}
            <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-lg shadow-indigo-100/50 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <img
                    src={brainImages[currentImageIndex]}
                    alt="Brain"
                    className="w-32 h-32 rounded-full transition-all duration-500 ease-in-out shadow-md"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    💡
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">Tip of the Day</h2>
                  <p className="text-lg text-gray-700 mb-3">Drink a glass of water every 2 hours 💧</p>
                  <p className="text-sm text-gray-500 italic">"You are doing enough. Be proud of yourself."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
