/**
 * Expose diffKeys
 */

module.exports = diffKeys

/**
 * diffKeys
 */

function diffKeys (a, b) {
  var diff = []

  for (var k in a) {
    if (a[k] !== b[k] || !b.hasOwnProperty(k)) {
      diff.push(k)
    }
  }

  for (var k in b) {
    if ((a[k] !== b[k] || !a.hasOwnProperty(k)) && diff.indexOf(k) === -1) {
      diff.push(k)
    }
  }

  return diff
}
