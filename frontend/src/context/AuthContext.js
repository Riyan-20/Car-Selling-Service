import React, { createContext, useContext, useState } from "react";
import axios from "../utils/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/login", { email, password });
      if (response.data.success) {
        setUser({ email });
        localStorage.setItem("token", response.data.token);
        window.location.href = "/submit-car"; // Redirect to car submission page
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
