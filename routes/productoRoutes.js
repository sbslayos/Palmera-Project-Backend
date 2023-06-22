const express = require("express");
const router = express.Router();
const autencicacionMidd = require("../middleware/autenticacionMidd");
const productosController = require("../controllers/productosController");

router.get("/home", productosController.leerProductoHome);

router.get("/:id", autencicacionMidd, productosController.leerProducto );

router.post("/", autencicacionMidd, productosController.crearProducto);

module.exports = router;