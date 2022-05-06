import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import History from "./history/history";
import Settings from "./settings/index";
import Settings_User from "./settings/user";
import About from "./about/about";
import Error from "./error/error";
import { AuthProvider, ProtectedRoute, useAuth } from "./context/auth";
import Login from "./user/login";
import { Button } from "react-bootstrap";

render();

function render(): void {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById("root")
  );
}

function App(): JSX.Element {
  return (
    <main>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/index"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/settings/user" element={<Settings_User />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </main>
  );
}

function Navigation(): JSX.Element {
  const { token, onLogout } = useAuth();

  return (
    <div>
      <NavLink to="/">Home</NavLink> &nbsp;
      <NavLink to="/history">History</NavLink> &nbsp;
      <NavLink to="/settings/index">Settings</NavLink> &nbsp;
      <NavLink to="/about">About</NavLink> &nbsp;
      <div className="mb-2">
        {token && (
          <Button variant="info" onClick={onLogout}>
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
}
