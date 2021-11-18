const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  Message: { type: String },
});

module.exports = mongoose.model("Contact", ContactSchema);
