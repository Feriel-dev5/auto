import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../api/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // ici
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.setToken(token);
      setIsLoggedIn(true);
      // ici - récupérer les infos utilisateur
      fetchUserInfo();
    }
    setLoading(false);
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await API.get("/api/me");
      setUser(response.data);
    } catch (error) {
      // ici
      logout();
    }
  };

  const login = (token, userData = null) => {
    localStorage.setItem("token", token);
    API.setToken(token);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    API.setToken("");
    setUser(null);
    setIsLoggedIn(false);
  };

  const value = {
    user,
    isLoggedIn,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
