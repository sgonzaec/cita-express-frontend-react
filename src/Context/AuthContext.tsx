// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import environments from "../Environments/environments";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: string, password: string) => void;
  logout: () => void;
  userEmail: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(""); //poner valor por defecto guardado con cookie

  const TOKEN_KEY: string = "authToken";
  const EXPIRATION_KEY: string = "tokenExpiration";

  const CryptoJS = require("crypto-js");
  const iv = CryptoJS.lib.WordArray.random(16);

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
    const authToken = CryptoJS.AES.encrypt(
      `${password}-${user}`,
      environments.passCrpto,
      { iv }
    ).toString();
    const tokenExpirationMs = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
    localStorage.setItem(TOKEN_KEY, authToken);
    localStorage.setItem(EXPIRATION_KEY, tokenExpirationMs.toString());
    setUserEmail(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
    setUserEmail("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>
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
