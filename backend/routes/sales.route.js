const sales = require("../controllers/sales.controller");
const express = require("express");
const router = express.Router();

//api/sales route
router.post("/", sales.add);
router.get("/", sales.getAll);
router.get("/total", sales.getRevenueToday);
router.get("/top", sales.getTopFive);

module.exports = router;
