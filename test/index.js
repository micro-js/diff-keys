/**
 * Imports
 */

var diffKeys = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(diffKeys({a: 1, b: 2, c: 3}, {a: 1, b: 3, c: 4}), ['b', 'c'])
  t.end()
})
