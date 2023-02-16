const Utils = {
    calculateNumber: (type, a, b) => {
      if (!["SUM", "SUBTRACT", "DIVIDE"].includes(type)) {
        throw new TypeError("Invalid type");
      }
      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Invalid input");
      }
      a = Math.round(a);
      b = Math.round(b);
      if (type === "SUM") {
        return a + b;
      } else if (type === "SUBTRACT") {
        return a - b;
      } else if (type === "DIVIDE") {
        if (b === 0) {
          return "Error";
        }
        return a / b;
      }
    }
  };
  
  module.exports = Utils;
  