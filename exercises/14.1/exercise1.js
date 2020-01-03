const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.deepStrictEqual(sum(4, 5), 9);
assert.deepStrictEqual(sum(0, 0), 0);
// assert.deepStrictEqual(sum(4, "5"), 9);
assert.throws(() => { sum(4, "5") }, /Error: parameters must be numbers/)
