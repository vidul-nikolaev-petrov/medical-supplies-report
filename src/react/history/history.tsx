import React from "react";
import useOnlineStatus from "@rehooks/online-status";

function History(): JSX.Element {
    const onlineStatus = useOnlineStatus();

    return (
        <div>
            <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
        </div>
    );
}

export default History;
