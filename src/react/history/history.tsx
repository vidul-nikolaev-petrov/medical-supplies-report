import React from "react";
import useOnlineStatus from "@rehooks/online-status";
import { useAuth } from "../context/auth";

function History(): JSX.Element {
  const onlineStatus = useOnlineStatus();
  const { token } = useAuth();

  return (
    <div>
      <h1>History: network {onlineStatus ? "online" : "offline"}</h1>
      {token && (
        <span>
          Welcome <b>{token}</b>
        </span>
      )}
    </div>
  );
}

export default History;
