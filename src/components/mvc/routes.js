const express = require("express");
const router = express.Router();

//const  UserAuth = require('../middlewares/auth');
//const  system_auth = require('../middlewares/auth-public');

const controller = require("./controller");

router.get("/", controller.obtener_nombre);

module.exports = router;