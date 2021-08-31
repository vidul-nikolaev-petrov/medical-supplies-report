import React from "react";
import { writeDate } from "../../lib/settings";

function Settings(): JSX.Element {
    writeDate();
    return <h1>Settings for MS</h1>;
}

export default Settings;
