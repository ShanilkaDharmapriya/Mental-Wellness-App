import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const { confirmPassword, ...registerData } = formData;
      const res = await axios.post('http://localhost:5000/api/auth/register', registerData);
      const { token, user } = res.data;
      
      localStorage.setItem('token', token);
      
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-heading">✨ Create Account</h2>
        
        {error && <p className="auth-error">{error}</p>}
        
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="focus:ring-2 focus:ring-green-300"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="focus:ring-2 focus:ring-green-300"
        />
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
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
        
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="focus:ring-2 focus:ring-green-300"
        />
        
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="focus:ring-2 focus:ring-green-300"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mt-6 disabled:bg-green-400 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
            Sign in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
