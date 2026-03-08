module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  moduleNameMapper: {
    '@application/useCases/(.*)': '<rootDir>/src/application/useCases/$1',
    '@application/repositories/(.*)':
      '<rootDir>/src/application/repositories/$1',
    '@application/(.*)': '<rootDir>/src/application/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '@interface/(.*)': '<rootDir>/src/interface/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
  },
}
