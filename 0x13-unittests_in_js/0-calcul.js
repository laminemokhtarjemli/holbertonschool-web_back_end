const calculateNumber = (a, b) => {
if (!Number.isFinite(a) || !Number.isFinite(b)) {
throw new TypeError();
}
return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;
