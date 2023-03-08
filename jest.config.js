/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|png|svg|jpg|jpeg)$": "identity-obj-proxy",
    "^api(.*)$": "<rootDir>/src/api$1",
    "^core(.*)$": "<rootDir>/src/core$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^helpers(.*)$": "<rootDir>/src/helpers$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^services(.*)$": "<rootDir>/src/services$1",
    "^static(.*)$": "<rootDir>/static$1",
  }
}
