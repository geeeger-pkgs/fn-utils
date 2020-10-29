module.exports = {
  globals: {
    skipBabel: true,
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/output/', '/pages/'],
};
