var uniqueRandomArray = require('unique-random-array');
var senatesNames = require('./senates-names.json');

module.exports = {
  all: senatesNames,
  random: uniqueRandomArray(senatesNames)
};
