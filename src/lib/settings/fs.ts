const node_fs = window.require("fs");
const path = window.require("path");

// Global constants
const REPO = "repo";


const fs = new Proxy(node_fs, {
    get(target, propName) {
        const prop = target[propName];

        if (typeof prop !== "function") {
            return prop;
        }

        return function (...args) {
            let dir = args[0];
            let subdir = undefined;

            if (isDebug() === false) {
                if (dir.startsWith(REPO)) {
                    subdir = dir.split("/");
                    dir = subdir.shift();
                    dir = path.join(getRootDir(), REPO);
                    dir = path.join(dir, ...subdir);
                }

                args[0] = dir;
            }

            prop.apply(target, args);
        };
    },
});

function getRootDir(): string {
    return path.join(__dirname, "..", "..");
}

function isDebug(): boolean {
    return process.env.npm_lifecycle_event === "start";
}

export default fs;