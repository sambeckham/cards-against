'use strict';

describe('Filter: shuffle', function () {

  // load the filter's module
  beforeEach(module('cardsAgainstApp'));

  // initialize a new instance of the filter before each test
  var shuffle;
  beforeEach(inject(function ($filter) {
    shuffle = $filter('shuffle');
  }));

  it('should return the input prefixed with "shuffle filter:"', function () {
    var text = 'angularjs';
    expect(shuffle(text)).toBe('shuffle filter: ' + text);
  });

});
