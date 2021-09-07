/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */


module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    collectCoverage: true,
    verbose: true,
    // testPathIgnorePatterns: ["/node_modules/", "/out/"],
    testRegex: "./src/.+\\.test\\.tsx?$",
    setupFilesAfterEnv: ['./jest.setup.js'],
};
