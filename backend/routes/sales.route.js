const sales = require("../controllers/sales.controller");

module.exports = (app) => {
  app.post("/api/sales", sales.add);
};
