const Sales = require("../models/sales.model");

//Fetch all sales
exports.getAll = (req, res) => {
  Sales.find({ user: req.user })
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((err) => {
      return res.status(500).json({ error: `Server Error ${err}` });
    });
};

//Adding a new sale
exports.add = (req, res) => {
  const { product, quantity, amount } = req.body;

  if (!product || !quantity || !amount) return res.status(400).json({ error: "Please provide all fields." });

  const newSale = new Sales({
    product,
    quantity: parseInt(quantity),
    amount: parseInt(amount),
    user: req.user,
  });

  newSale
    .save()
    .then((data) => {
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      return res.status(200).json({ message: "New sale added successfully" });
    })
    .catch((err) => {
      return res.status(500).json({ error: `Server Error ${err}` });
    });
};

//Get total revenue for the day
exports.getRevenueToday = (req, res) => {
  const today = new Date();
  //Get a new date object that starts from midnight of today
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  //get all sales that start after midnight
  Sales.find({ createdAt: { $gte: startOfDay }, user: req.user }, "amount")
    .then((data) => {
      let result = data.reduce((sum, item) => sum + parseInt(item.amount), 0);
      return res.status(200).json({ message: result.toString() });
    })
    .catch((err) => {
      return res.status(500).json({ error: `Server Error ${err}` });
    });
};

//Get the top 5 sales
exports.getTopFive = (req, res) => {
  //Sort all sales in descending order and only get the first 5
  Sales.find({ user: req.user })
    .sort({ amount: -1 })
    .limit(5)
    .then((data) => {
      return res.status(200).json({ message: data });
    })
    .catch((err) => {
      return res.status(500).json({ error: `Server Error ${err}` });
    });
};
