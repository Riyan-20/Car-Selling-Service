import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CarSubmissionPage from "./pages/CarSubmissionPage";
import ViewSubmissionsPage from "./pages/ViewSubmissionsPage";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/submit-car"
          element={
            <PrivateRoute>
              <CarSubmissionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-submissions"
          element={
            <PrivateRoute>
              <ViewSubmissionsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
