module.exports = function calculateNumber(a, b = 0) {
    const first = Number(a);
    const secnd = Number(b);
    
    if (Number.isNaN(first) || Number.isNaN(secnd))
      throw TypeError('Parameters must be numbers');
    
      return Math.round(first) + Math.round(secnd);
    };
