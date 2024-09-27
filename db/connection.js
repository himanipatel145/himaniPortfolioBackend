const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/himaniPortfolio")
  .then(() => console.log("Connection Successful"))
  .catch((error) => console.log("Error", error));
