module.exports = {
  extends: '@loopback/eslint-config',
  ignorePatterns: ['src/release_notes/**/*.js'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
