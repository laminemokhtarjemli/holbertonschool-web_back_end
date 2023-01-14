const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", () => {
    it("should return the sum of a and b when type is SUM", () => {
        assert.strictEqual(calculateNumber("SUM", 1.5, 2.5), 4);
    });
    it("should return the difference of a and b when type is SUBTRACT", () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 5, 2), 3);
    });
    it("should return the division of a and b when type is DIVIDE", () => {
        assert.strictEqual(calculateNumber("DIVIDE", 10, 2), 5);
    });
    it("should return Error when dividing by 0", () => {
        assert.strictEqual(calculateNumber("DIVIDE", 10, 0), "Error");
    });
    it("should throw an error when type is invalid", () => {
        assert.throws(() => calculateNumber("INVALID", 10, 2), TypeError);
    });
    it("should throw an error when a or b is not a number", () => {
        assert.throws(() => calculateNumber("SUM", "a", 2), TypeError);
        assert.throws(() => calculateNumber("SUM", 10, "b"), TypeError);
    });
});
