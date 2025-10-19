import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// Mock AuthProvider for frontend-only display
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock functions for frontend display
  const createUser = (email, password) => {
    setLoading(true);
    // Simulate successful registration
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { email, displayName: "Demo User", uid: "demo-uid" };
        setUser(mockUser);
        setLoading(false);
        resolve({ user: mockUser });
      }, 1000);
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    // Simulate successful login
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { email, displayName: "Demo User", uid: "demo-uid" };
        setUser(mockUser);
        setLoading(false);
        resolve({ user: mockUser });
      }, 1000);
    });
  };

  const googleLogin = () => {
    setLoading(true);
    // Simulate Google login
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { email: "demo@gmail.com", displayName: "Demo User", uid: "demo-uid" };
        setUser(mockUser);
        setLoading(false);
        resolve({ user: mockUser });
      }, 1000);
    });
  };

  const logOut = () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(null);
        setLoading(false);
        resolve();
      }, 500);
    });
  };

  // Mock database object (empty for frontend display)
  const db = {};

  // Simulate auth state change
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const authInfo = {
    db,
    user,
    createUser,
    googleLogin,
    signIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
