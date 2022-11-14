import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/templates/(.*)$': '<rootDir>/components/templates/$1',
    '^@/layouts/(.*)$': '<rootDir>/components/layouts/$1',
    '^@/ui/(.*)$': '<rootDir>/components/ui/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
