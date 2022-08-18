const { data } = require("../data");
const { calculatePoints } = require("../helpers/record.helper");

const getRecords = async (req, res) => {
  console.log("Data is :: ", data);
  const makeData = data.map((cus) => {
    let customer = cus;
    customer.transactions[0].points = calculatePoints(
      customer.transactions[0].amount
    );
    customer.transactions[1].points = calculatePoints(
      customer.transactions[1].amount
    );
    customer.transactions[2].points = calculatePoints(
      customer.transactions[2].amount
    );
    const totalPoints =
      customer.transactions[0].points +
      customer.transactions[1].points +
      customer.transactions[2].points;
    customer.totalPoints = totalPoints;
    return customer;
  });
  return res.status(200).json({ data: makeData });
};

module.exports = { getRecords };
