const assert = require('assert');

const number1 = 50;
const number2 = 40;

function somar(number1, number2) {
    if (number1 > number2) return true
    return false
}

assert.deepStrictEqual(typeof(somar), "function");
assert.ok(number1 > number2);
assert.deepStrictEqual(somar(number1, number2), true);
assert.deepStrictEqual(somar(number2, number1), false);
