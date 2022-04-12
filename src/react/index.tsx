import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import History from "./history/history";
import Settings from "./settings/index";
import Settings_User from "./settings/user";
import About from "./about/about";
import Error from "./error/error";
import { AuthProvider, useAuth } from "./context/auth";

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
          <Route path="/history" element={<History />} />
          <Route path="/settings/index" element={<Settings />} />
          <Route path="/settings/user" element={<Settings_User />} />
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
      <Link to="/">Home</Link> &nbsp;
      <Link to="/history">History</Link> &nbsp;
      <Link to="/settings/index">Settings</Link> &nbsp;
      <Link to="/about">About</Link> &nbsp;
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </div>
  );
}
