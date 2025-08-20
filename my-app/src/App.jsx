import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import JournalPage from './pages/JournalPage';
import UpliftMe from './pages/UpLift';
import SupportWall from './pages/Feed';
import DailySchedule from './pages/DailySchedule';
import UserDashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminActivity from './pages/AdminActivity';
import AdminModeration from './pages/AdminModeration';
import ProtectedRoute from './ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/auth.css';
import './styles/journal.css';
import './styles/uplift.css';
import './styles/feed.css';
import './styles/dailyschedule.css';
import './styles/dashboard.css';

function AppShell() {
  const location = useLocation();

  // Paths where we HIDE header/footer
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app-layout min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Public (no header/footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <JournalPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/uplift"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <UpliftMe />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Feed"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <SupportWall />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DailySchedule"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <DailySchedule />
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/activity"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminActivity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/moderation"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminModeration />
              </ProtectedRoute>
            }
          />

          {/* Fallback → redirect to /login (so header/footer stay hidden) */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
