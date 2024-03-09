// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import environments from "../Environments/environments";
import jwt from 'jsonwebtoken';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const TOKEN_KEY: string = "authToken";
  const EXPIRATION_KEY: string = "tokenExpiration";


  useEffect(() => {
    const checkAuthentication = () => {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const tokenExpiration = localStorage.getItem(EXPIRATION_KEY);

      if (storedToken && tokenExpiration) {
        const currentTime = new Date().getTime();
        const isExpired = currentTime > parseInt(tokenExpiration, 10);

        if (!isExpired) {
          setIsAuthenticated(true);
        }
      }
    };

    checkAuthentication();
  }, []);

  const login = (user: string, password: string) => {

    const authUser = {username:user};
    const authToken = jwt.sign({authUser},
      environments.secretKey, { expiresIn: '24h'}
      )
    const tokenExpirationMs = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
    localStorage.setItem(TOKEN_KEY, `jwt ${authToken}`);
    localStorage.setItem(EXPIRATION_KEY, tokenExpirationMs.toString());
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
