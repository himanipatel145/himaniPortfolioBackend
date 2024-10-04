const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: [true, "Email id already present"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
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
    contact: {
      type: String,
    },
    // file: {
    //   type: String,
    // },
  },
  { versionKey: false }
);

const Contact = mongoose.model("himaniPortfolio", contactSchema);
module.exports = Contact;
