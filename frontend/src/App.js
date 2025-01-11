import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CarSubmissionPage from './pages/CarSubmissionPage';
import ViewSubmissionsPage from './pages/ViewSubmissionsPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/car-submission" element={<CarSubmissionPage />} />
          <Route path="/view-submissions" element={<ViewSubmissionsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
