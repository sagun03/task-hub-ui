// src/hooks/useAuth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Simulate a user authentication check on component mount
  useEffect(() => {
    // replace this with actual authentication logic
    const isAuthenticated = /* Check if the user is authenticated */ true;

    if (isAuthenticated) {
      const userData = {name: 'sagun', email: 'demo@123'}/* Fetch user data */
      setUser(userData);
    } else {
      setUser(null);
    }
  }, []);

  const login = () => {
    const userData = {name: 'sagun', email: 'demo@123'}/* Fetch user data */;
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
