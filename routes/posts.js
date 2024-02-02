const express = require("express");

const router = express.Router();

router.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});
