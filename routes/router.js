const express = require("express");
const router = express.Router();
const contact = require("../model/contactSchema");

router.post("/contactMe", async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(422).json({ error: "Fill the fields properly" });
  }
  try {
    const newUser = new contact({ name, message });
    const creatNewUser = await newUser.save();
    if (creatNewUser) {
      res.status(201).json({ message: "User Created Successfully!!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in creating contact", error: err });
  }
});

router.get("/getAllDetails", async (req, res) => {
  try {
    const getAllDetails = await contact.find();
    res.status(200).json(getAllDetails);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contacts data", error: err });
  }
});

module.exports = router;
