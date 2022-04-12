import React from "react";
import { useAuth } from "../context/auth";

function Home(): JSX.Element {
  const { token, onLogin } = useAuth();

  return (
    <>
      <h1>Home of MS</h1>
      {token ? (
        <span>
          Welcome <b>{token}</b>
        </span>
      ) : (
        <button type="button" onClick={onLogin}>
          Sign In
        </button>
      )}
    </>
  );
}

export default Home;
