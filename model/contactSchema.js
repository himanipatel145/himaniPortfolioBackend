const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false } //remove __v key
);

const contact = mongoose.model("himaniPortfolio", contactSchema);
module.exports = contact;
