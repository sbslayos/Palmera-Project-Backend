const Usuario = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({path : "variables.env"})

exports.autenticarUsuario = async (req, res) => {

    const {password, email} = req.body;

    try{
        // validacion ususario registrado
        let usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(404).json({msg: "El usuario no existe"});
        }
        //Validacion password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passwordCorrecto){
            return res.status(400).json({msg : "Contraseña Incorrecta"})
        } 
        // Generar token de acceso
        const payload = {
            usuario: { id: usuario.id },
        };
        // res.json(payload); accedo a Id
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '1m', //1 dia
            },
            (error, token) => {
                if(error) throw error;
                //confirmar
                res.json({token});
            } 
        );

    }catch(error){
        console.log(error);
    }

}

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});
    } catch (error) {
        res.status(500).json({msg: "Hubo un error"});
    }
}