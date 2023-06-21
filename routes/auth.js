const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const autenticacionMidd = require("../middleware/autenticacionMidd");
router.post(
    "/",
    authController.autenticarUsuario
);

router.get("/" , autenticacionMidd, authController.usuarioAutenticado)

module.exports = router;

