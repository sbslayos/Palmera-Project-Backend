const express = require("express");
const router = express.Router();
const autenticacionMidd = require("../middleware/autenticacionMidd");
const categoriasController = require("../controllers/categoriasController");

router.get("/home", categoriasController.leerCategoriaHome);

router.get("/", autenticacionMidd, categoriasController.leerCategoria);

//router.get("/:id", autenticacionMidd, categoriasController.leerCategoriaId);

router.get("/:id", autenticacionMidd, categoriasController.obtenerCategoriaId);

router.post("/", autenticacionMidd, categoriasController.crearCategoria);

router.put("/:id", autenticacionMidd, categoriasController.actualizarCategoria);

router.delete("/:id", autenticacionMidd, categoriasController.borrarCategoria);

module.exports = router;