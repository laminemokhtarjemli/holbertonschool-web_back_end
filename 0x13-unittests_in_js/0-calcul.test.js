const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('should round the input numbers and return their sum', () => {
        assert.strictEqual(calculateNumber(3.4, 5.6), 9);
        assert.strictEqual(calculateNumber(6.5, 8.5), 15);
    });

    it('should work correctly for negative numbers', () => {
        assert.strictEqual(calculateNumber(-3.4, -5.6), -9);
        assert.strictEqual(calculateNumber(-6.5, -8.5), -15);
    });

    it('should work correctly for numbers with decimal places', () => {
        assert.strictEqual(calculateNumber(3.14, 2.72), 6);
        assert.strictEqual(calculateNumber(2.99, 3.01), 6);
    });
});
