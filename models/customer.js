const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 20,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports.Customer = Customer;
