'use strict';

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/FileMocks.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/SetupTests.js',
  testMatch: ['<rootDir>/**/*.test.js?(x)'],
  testPathIgnorePatterns: ['/src/main/', 'node_modules'],
};
