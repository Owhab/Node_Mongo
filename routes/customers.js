const { Customer } = require("./../models/customer");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

router.post("/", async (req, res) => {
  let customer = await new Customer();
  customer.name = req.body.name;
  customer.isGold = req.body.isGold;
  customer.phone = req.body.phone;
  customer.save();
  res.send(customer);
});

router.put("/:id", async (req, res) => {
  let customer = await Customer.findByIdAndUpdate({ _id: id });
  if (!customer) return;
});

module.exports = router;
