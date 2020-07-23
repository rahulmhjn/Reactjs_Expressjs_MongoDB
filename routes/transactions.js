const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transacions");

const requireAuth = require("../middlewares/requireAuth");

router.use(requireAuth);

router.route("/").get(getTransactions).post(addTransactions);

router.route("/:id").delete(deleteTransactions);

module.exports = router;
