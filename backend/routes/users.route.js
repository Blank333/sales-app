const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controller");

//api/users routes
router.get("/", users.getAll);
router.post("/register", users.register);
router.post("/login", users.login);

module.exports = router;
