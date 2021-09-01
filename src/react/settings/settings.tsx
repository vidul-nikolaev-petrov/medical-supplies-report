import React from "react";
import { writeDate } from "../../lib/settings";

function Settings(): JSX.Element {
    // writeDate();
    return <h1>Settings for MS {writeDate()}</h1>;
}

export default Settings;
