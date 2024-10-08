const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    opportunity: {
      type: String,
    },
    companyName: {
      type: String,
    },
    message: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    files: {
      type: String,
    },
  },
  { versionKey: false }
);

const Contact = mongoose.model("himaniPortfolio", contactSchema);
module.exports = Contact;
