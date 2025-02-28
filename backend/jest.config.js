/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testMatch: ["**/tests/**/*.test.ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        // ✅ Move `ts-jest` config inside `transform`
        tsconfig: "tsconfig.json", // ✅ Ensure TypeScript config is used
      },
    ],
  },
};
