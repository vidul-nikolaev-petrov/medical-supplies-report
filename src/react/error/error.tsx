import React from "react";
import { Link } from "react-router-dom";

function Error(): JSX.Element {
    return (
        <div>
            <h1>This is an error!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default Error;
