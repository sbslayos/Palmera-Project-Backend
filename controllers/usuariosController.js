const Usuario = require("../models/Usuarios");
const bcryptjs = require ("bcryptjs");


exports.crearUsuario = async ( req, res) => {
    /*console.log(req.body); */
    console.log(req.body)
    const {password, email} = req.body;
    
    try {
        //unico email
        let usuario = await Usuario.findOne({email})
        if (usuario){
            return res.status(404).json({msg: "El usuario ya existe"});
        }
        
        //crear nuevo usuario
    usuario = new Usuario(req.body);
    //hash password
    
    usuario.password = await bcryptjs.hash(password, 10);
    
    // Guardar en base de datos
        const usuarioAlmacenado = await usuario.save();
    
        res.json(usuarioAlmacenado);
        
    } catch (error) {
        console.log(error);
    }
} 