import fs from "./fs";

export function writeDate(): any {
    // const dest = isDebug()
    //     ? path.join("repo", "Date.txt")
    //     : path.join(getRepoDir(), "Date.txt");

    fs.writeFileSync("repo/Date.txt", Date() + "\n\n", () => {});
}

export function sum(a: number, b: number): number {
    return a + b;
}
