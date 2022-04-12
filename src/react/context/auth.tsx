import React, { FC } from "react";
import { Navigate,useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

async function fakeAuth(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 0);
  });
}

export const useAuth: any = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
    navigate("/history");
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const ProtectedRoute: any = ({ children }) => {
    const { token } = useAuth();
  
    if (!token) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };
