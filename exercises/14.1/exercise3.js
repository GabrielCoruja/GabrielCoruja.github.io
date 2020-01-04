const assert = require('assert');

function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

assert.deepStrictEqual(mySum([1, 2, 3, 4]), 10);
assert.deepStrictEqual(mySum([1, -2, -3, 4]), 0);
