const sales = require("../controllers/sales.controller");
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

//middleware for authentication
router.use(verifyToken);

//api/sales route
router.post("/", sales.add);
router.get("/", sales.getAll);
router.get("/total", sales.getRevenueToday);
router.get("/top", sales.getTopFive);

module.exports = router;
