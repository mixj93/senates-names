// http://chaijs.com/
// https://mochajs.org/

var expect = require('chai').expect;
var sensatesNames = require('./index');

describe('sensates-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(sensatesNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });
    it('should contain `Jonas Maliki`', function() {
      expect(sensatesNames.all).to.include('Jonas Maliki');
    });
  });

  describe('random', function() {
    it('should return a random item from sensates names', function() {
      var randomItem = sensatesNames.random();
      expect(sensatesNames.all).to.include(randomItem);     
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = sensatesNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(sensatesNames.all).to.include(item);
      })
    });
  });
});
