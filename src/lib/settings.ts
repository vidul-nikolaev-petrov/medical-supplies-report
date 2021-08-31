const fs = window.require("fs");

export function writeDate(): void {
    fs.writeFile("Date.txt", Date(), () => {});
}
