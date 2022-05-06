import React from "react";
import { useAuth } from "../context/auth";
import { Button } from "react-bootstrap";


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
        <Button variant="info" onClick={onLogin}>
          Sign In
        </Button>
      )}
    </>
  );
}

export default Home;
