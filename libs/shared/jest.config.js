module.exports = {
  name: 'data',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/data',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};
