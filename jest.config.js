module.exports = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/services/cardsService.ts',
    '!src/pages/*.tsx'
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|ts|tsx)$': ['babel-jest'],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

}
