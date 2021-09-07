const fs = window.require("fs");
const path = window.require("path");

export function writeDate(): any {
    const dest = isDebug()
        ? path.join("repo", "Date.txt")
        : path.join(getRepoDir(), "Date.txt");

    fs.writeFileSync(dest, Date() + "\n\n", () => {});
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
