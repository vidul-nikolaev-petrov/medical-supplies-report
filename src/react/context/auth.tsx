import React, { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

function fakeAuth(): string {
  sessionStorage.setItem("user", "nice user-123321 ");
  console.log(sessionStorage.getItem("user"));
  return sessionStorage.getItem("user");
}

export const useAuth: any = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(null);

  const handleLogin = () => {
    // const token = fakeAuth();

    // setToken(token);
    navigate("/user/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setToken(null);
  };

  const value = {
    token,
    setToken,
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
