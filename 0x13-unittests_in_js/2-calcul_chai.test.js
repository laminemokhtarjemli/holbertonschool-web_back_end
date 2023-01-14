const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
    it("should return the sum of a and b when type is SUM", () => {
        expect(calculateNumber("SUM", 1.5, 2.5)).to.equal(4);
    });
    it("should return the difference of a and b when type is SUBTRACT", () => {
        expect(calculateNumber("SUBTRACT", 5, 2)).to.equal(3);
    });
    it("should return the division of a and b when type is DIVIDE", () => {
        expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
    });
    it("should return Error when dividing by 0", () => {
        expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
    });
    it("should throw an error when type is invalid", () => {
        expect(() => calculateNumber("INVALID", 10, 2)).to.throw(TypeError);
    });
    it("should throw an error when a or b is not a number", () => {
        expect(() => calculateNumber("SUM", "a", 2)).to.throw(TypeError);
        expect(() => calculateNumber("SUM", 10, "b")).to.throw(TypeError);
    });
});
