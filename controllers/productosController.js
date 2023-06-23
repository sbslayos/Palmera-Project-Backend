const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");
// const Usuarios = require("../models/Usuarios");
// const jwt = require("jsonwebtoken");
// require("dotenv").config({path : "variables.env"})
exports.leerProductoHome = async (req, res) => {
    try {
        const producto1 = await Productos.find();
        res.json({producto1})
    } catch (error) {
        console.log(error);
    }
}

exports.leerProducto = async (req, res) =>{
    const {id} = req.params;
    const producto1 = await Productos.find().where("categoriaId").equals(id);
    res.json(producto1);
}

exports.crearProducto = async (req, res) => {
    // const token = req.headers['x-auth-token'];
    const {categoriaId} = req.body;
    try {

        const enCategoria = await Categorias.findById(categoriaId);
        if (!enCategoria){
            return res.status(400).json({msg: "La Categoria especificada, no existe."})
        }
        console.log(enCategoria);

        // const decodedToken = jwt.verify(token, SECRETA);
        // const userId= decodedToken.usuarioId;
        // if(enCategoria.id.toString() !== Categorias.id.toString()){
        //     res.status(400).json({msg: "No tienes el permiso para agregar el producto"})
        // }
        
        const producto1 = new Productos(req.body);
        producto1.save();
        res.json(producto1);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error al crear el producto"})
        
    }
}
exports.actualizarProducto = async (req, res) =>{
    const { id } = req.params;
    const { categoriaId, ...datosProducto } = req.body;

    try {
        const producto1 = await Productos.findById(id)

        if(!producto1) {
            return res.status(404).json({msg: "Producto no encontrado"});
        }

        const enCategoria = await Categorias.findById(categoriaId);

        if (!enCategoria){
            return res.status(400).json({msg: "Categoria no encontrada"});
        }
        producto1.nombre = datosProducto.nombre;
        producto1.descripcion = datosProducto.descripcion;
        producto1.stock = datosProducto.stock;
        producto1.precio = datosProducto.precio;
        producto1.imagen = datosProducto.imagen;
        producto1.categoriaId = datosProducto.categoriaId;

        await producto1.save();
        res.json(producto1)

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error al actualizar el producto"});
        
    }

}
exports.borrarProducto = async (req, res) =>{
    try {
        await Productos.deleteOne({_id: req.params.id})
        res.json({msg:"Producto eliminado"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Error al borrar el producto"});   
    }

}