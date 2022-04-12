import React, { FC } from "react";

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
  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
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
