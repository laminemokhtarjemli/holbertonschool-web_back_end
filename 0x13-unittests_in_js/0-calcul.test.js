const { calculateNumber } = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
    it('should return the rounded sum of a and b', () => {
        assert.equal(calculateNumber(2.3, 4.6), 7);
        assert.equal(calculateNumber(3.5, 2.9), 6);
        assert.equal(calculateNumber(1.6, 5.4), 7);
    });
    it('should return the rounded sum of a and b even if a is negative', () => {
        assert.equal(calculateNumber(-2.3, 4.6), 2);
        assert.equal(calculateNumber(-3.5, 2.9), 0);
        assert.equal(calculateNumber(-1.6, 5.4), 4);
    });
    it('should return the rounded sum of a and b even if a is 0', () => {
        assert.equal(calculateNumber(0, 4.6), 5);
        assert.equal(calculateNumber(0, -2.9), -3);
        assert.equal(calculateNumber(0, 5.4), 5);
    });
    it('returns TypeError', () => {
        assert.throws(() => calculateNumber(NaN, 5.6), { name: 'TypeError' });
        assert.throws(() => calculateNumber(5.6, NaN), { name: 'TypeError' });
        assert.throws(() => calculateNumber(NaN, NaN), { name: 'TypeError' });
      });
});
