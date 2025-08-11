import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, user } = res.data;
      localStorage.setItem('token', token);

      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2 className="auth-heading">🔐 Welcome Back</h2>
        
        {error && <p className="auth-error">{error}</p>}
        
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="focus:ring-2 focus:ring-green-300"
        />
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="focus:ring-2 focus:ring-green-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mt-6 disabled:bg-green-400 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
            Create one here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;