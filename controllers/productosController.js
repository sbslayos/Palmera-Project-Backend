const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");

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
    const {categoriaId} = req.params;
    try {
        const enCategoria = await Categorias.findById(categoriaId);
        console.log(enCategoria);
        
        const producto1 = new Productos(req.body);
        producto1.save();
        res.json(producto1);
    
    } catch (error) {
        console.log(error);
        
    }
}