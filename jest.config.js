/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    // moduleNameMapper: {
        // "^@App/(.*)$": "<rootDir>/src/$1",
        // "^lib/(.*)$": "<rootDir>/common/$1",
    // },
    testMatch: [
      "/src/**/(.+)_(test)_.ts",
      "/src/**/**/(.+)_(test)_.ts",
      "/src/react/**/(.+)_(test)_.ts",
    ],
    // testPathIgnorePatterns: ["/node_modules/", "/out/"],
};
