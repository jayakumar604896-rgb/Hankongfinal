// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/app';

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('auth_token');
        const tokenExpiry = localStorage.getItem('token_expiry');
        
        console.log('Checking auth - Token exists:', !!storedToken);
        console.log('Checking auth - User exists:', !!storedUser);
        console.log('Token expiry:', tokenExpiry);
        
        // ✅ CHECK: If token expiry exists and is expired
        if (tokenExpiry) {
          const currentTime = new Date().getTime();
          const expiryTime = parseInt(tokenExpiry);
          
          console.log('Current time:', currentTime);
          console.log('Expiry time:', expiryTime);
          
          if (currentTime > expiryTime) {
            console.log('⚠️ Token has EXPIRED! Clearing data...');
            localStorage.removeItem('user');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('token_expiry');
            setUser(null);
            setLoading(false);
            return;
          }
        } else {
          // ❌ No expiry set - This is your problem!
          console.warn('⚠️ No token expiry found! Treating as invalid session...');
          
          // Option 1: Clear it immediately (strict)
          localStorage.removeItem('user');
          localStorage.removeItem('auth_token');
          setUser(null);
          setLoading(false);
          return;
          
          // Option 2: Set a default expiry of 24 hours from now
          // const newExpiry = new Date().getTime() + (24 * 60 * 60 * 1000);
          // localStorage.setItem('token_expiry', newExpiry.toString());
          // console.log('Set default expiry:', new Date(newExpiry).toLocaleString());
        }
        
        // Only set user if BOTH token and user exist and token hasn't expired
        if (storedUser && storedToken && storedToken !== 'null' && storedToken !== 'undefined') {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            console.log('User set from localStorage:', parsedUser);
          } catch (e) {
            console.error('Failed to parse user data:', e);
            localStorage.removeItem('user');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('token_expiry');
            setUser(null);
          }
        } else {
          // Clear any invalid data
          localStorage.removeItem('user');
          localStorage.removeItem('auth_token');
          localStorage.removeItem('token_expiry');
          setUser(null);
          console.log('No valid auth data found');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token_expiry');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await authAPI.login(email, password);
      if (data.token && data.user) {
        // ✅ SET token expiry (24 hours from now)
        const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('token_expiry', expiryTime.toString());
        console.log('✅ Token expiry set to:', new Date(expiryTime).toLocaleString());
        
        // The authAPI.login already stores token and user
        setUser(data.user);
        console.log('Login successful - User set:', data.user);
        return data;
      } else {
        throw new Error('Invalid login response');
      }
    } catch (error) {
      console.error('Login error:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('token_expiry');
      setUser(null);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const data = await authAPI.register(name, email, password);
      if (data.token && data.user) {
        // ✅ SET token expiry (24 hours from now)
        const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('token_expiry', expiryTime.toString());
        console.log('✅ Token expiry set to:', new Date(expiryTime).toLocaleString());
        
        setUser(data.user);
        console.log('Registration successful - User set:', data.user);
        return data;
      } else {
        throw new Error('Invalid registration response');
      }
    } catch (error) {
      console.error('Registration error:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('token_expiry');
      setUser(null);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // ✅ Clear ALL storage
      localStorage.removeItem('user');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('token_expiry');
      setUser(null);
      console.log('Logout complete - User cleared');
    }
  };

  const value = { 
    user, 
    login, 
    register, 
    logout, 
    loading,
    isAuthenticated: !!user 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}