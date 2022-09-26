var express = require('express');
var router = express.Router();
var userController = require('../controller/registerUsersController')

router.post("/api/v1/registrarUsuario", userController.registarUsuario)
router.post("/api/v1/loggin", userController.loggin)

module.exports = router;
