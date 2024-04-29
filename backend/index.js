const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes/sales.route");
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
app.use("/api/sales", routes);

//Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
