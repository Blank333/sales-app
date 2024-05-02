const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const salesRoute = require("./routes/sales.route");
const usersRoute = require("./routes/users.route");
const { DB_URL } = require("./DBconfig");

const app = express();
const port = 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Connecting to Database
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Conncted DB");
  })
  .catch((err) => {
    console.error(err);
  });

//routes
app.use("/api/sales", salesRoute);
app.use("/api/users", usersRoute);

//Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
