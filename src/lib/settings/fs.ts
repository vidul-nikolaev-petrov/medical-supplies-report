const fs = window.require("fs");
const path = window.require("path");

const msFS = new Proxy(fs, {
    get(target, propName) {
        const prop = target[propName];

        if (typeof prop !== "function") {
            return prop;
        }

        return function (...args) {
            let dir = args[0];
            let subdir = undefined;

            if (isDebug() === false) {
                if (dir.startsWith("repo")) {
                    subdir = dir.split("/");
                    dir = subdir.shift();
                    dir = path.join(getRootDir(), "repo");
                    dir = path.join(dir, ...subdir);
                }

                args[0] = dir;
            }

            console.log(">>>", args);

            prop.apply(target, args);
        };
    },
});

export function writeDate(): any {
    // const dest = isDebug()
    //     ? path.join("repo", "Date.txt")
    //     : path.join(getRepoDir(), "Date.txt");

    msFS.writeFileSync("repo/Date.txt", Date() + "\n\n", () => {});
}

function isDebug() {
    return process.env.npm_lifecycle_event === "start";
}

function getRootDir(): string {
    return path.join(__dirname, "..", "..");
}

function getRepoDir(): string {
    return path.join(getRootDir(), "repo");
}

export function sum(a: number, b: number): number {
    return a + b;
}
