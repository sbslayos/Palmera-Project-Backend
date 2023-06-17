const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");


router.post(
    "/",
    usuarioController.crearUsuario
);

 
//definir las rutas para poderlas usar
module.exports = router;

















// router.get("/", (req, res) => {
//     res.json({msg: "desde router get json}"});
// });

// router.post("/", (req, res) => {
//     res.json({msg: "desde router post json, hacia postman"});
// });

// router.put("/", (req, res) => {
//     res.json({msg: "desde router post json, hacia postman put"});
// });

// router.delete("/", (req, res) => {
//     res.json({msg: "desde router post json, hacia postman delete"});
// });