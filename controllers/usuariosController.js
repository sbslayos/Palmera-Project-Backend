const Usuario = require("../models/Usuarios");
const bcritjs = require ("bcryptjs");


exports.crearUsuario = async ( req, res) => {
    /*console.log(req.body); */
    const {password} = req.body;
    try {
        //crear nuevo usuario
    const usuario = new Usuario(req.body);
    //hash password
    usuario.password = await bcritjs.hash(password, 10);

    // Guardar en base de datos
        const usuarioAlmacenado = await usuario.save();
    
        res.json(usuarioAlmacenado);
        
    } catch (error) {
        console.log(error);
    }


}