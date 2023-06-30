const express = require("express")
const router = express.Router();

const mvcRouter = require("../components/mvc/routes");

router.use("/api", mvcRouter);

module.exports = router;
