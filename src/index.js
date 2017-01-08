var uniqueRandomArray = require('unique-random-array');
var senatesNames = require('./senates-names.json');
var getRandomItem = uniqueRandomArray(senatesNames);

module.exports = {
  all: senatesNames,
  random: random
};

function random(num) {
  if (num === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < num; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
