import React from "react";
import { Link } from "react-router-dom";
import { writeDate } from "../../lib/settings/misc";

function Settings(): JSX.Element {
    writeDate();

    return (
        <div>
            <h1>Settings for MS</h1>
            <div>
                <Link to="/settings/user">User</Link> &nbsp;
            </div>
        </div>
    );
}

export default Settings;
