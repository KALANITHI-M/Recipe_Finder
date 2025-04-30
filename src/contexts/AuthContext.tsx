
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // In a real application, these functions would call your API
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // This would be replaced with actual API call to verify credentials
      console.log('Login attempt with:', { email, password });
      
      // Mock successful login
      setUser({
        id: '1',
        name: email.split('@')[0], // Extract name from email as a placeholder
        email,
      });
      
      // Store in localStorage to persist login across page refreshes
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name: email.split('@')[0],
        email,
      }));
      
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // This would be replaced with actual API call to create user
      console.log('Signup attempt with:', { name, email, password });
      
      // Mock successful signup
      setUser({
        id: '1',
        name,
        email,
      });
      
      // Store in localStorage to persist login across page refreshes
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name,
        email,
      }));
      
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Check if user is already logged in (from localStorage)
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
