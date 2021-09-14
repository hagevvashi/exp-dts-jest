import path from "path";
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/**/*.{tsx,ts}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/jest.config.ts",
  ],
  testMatch: ["**/?(*.)+(test).ts?(x)", "**/?(*.)+(test-d).ts?(x)"],
  transform: {
    "^.+\\.test-d.tsx?$": "dts-jest/transform",
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  globals: {
    _dts_jest_: {
      compiler_options: path.resolve(__dirname, "./tsconfig.json"),
      transpile: false,
    },
  },
};

export default config;
