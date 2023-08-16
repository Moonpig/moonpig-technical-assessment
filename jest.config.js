module.exports = {
    collectCoverage: true,
    coverageProvider: 'v8',
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/services/cardsService.ts',
      '!src/pages/*.tsx'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  }