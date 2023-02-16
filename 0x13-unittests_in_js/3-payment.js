const { util } = require("chai");
const Utils = require("./utils.js");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
  return sum;
};

module.exports = sendPaymentRequestToApi
