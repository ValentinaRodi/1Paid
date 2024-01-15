// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  coverageDirectory: '__test__/**/*.j',
  collectCoverageFrom: ['!**/node_modules/**'],
}

module.exports = config
