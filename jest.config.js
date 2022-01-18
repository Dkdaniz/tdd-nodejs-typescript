module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>src/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'v8',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
