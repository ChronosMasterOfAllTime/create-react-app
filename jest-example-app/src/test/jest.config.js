'use strict';

module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  testMatch: ['<rootDir>/**/*.test.js?(x)'],
  testPathIgnorePatterns: ['/src/main/', 'node_modules'],
};
