const Categorias = require("../models/Categorias");

exports.leerCategoriaHome = async ( req, res) => {
    try {
        const categoria = await Categorias.find();
        
        res.json({ categoria })
        console.log(categoria);
    } catch (error) {
        console.log(error);
    }
}

exports.leerCategoria = async ( req, res) => {
    try {
        const categoria = await Categorias.find({creador: req.usuario.id});
        res.json({categoria})
        console.log(categoria);
        
    } catch (error) {
        console.log(error);
        
    }
}

// exports.leerCategoriaId = async ( req, res ) => {
//     try {
//         const categoria = await Categorias.find({creador: req.usuario.id});
//         res.json({ categoria})

//     } catch (error) {
//         console.log(error);
//     }
// }

exports.obtenerCategoriaId = async (req, res) =>{
    const {id} = req.params
    try {
        const categoria = await Categorias.findById(id);
        res.json({ categoria })
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error al obtener la categoria"});
    }
};



exports.crearCategoria = async (req, res) => {
    try {
        const categoria = new Categorias(req.body);

        categoria.creador = req.usuario.id;

        categoria.save();

        res.json({msg:"categoria creada"});
        res.json(categoria)

    } catch (error) {
        console.log(error);
    }
}

exports.actualizarCategoria = async ( req, res) => {
    const { id } = req.params;
    const categoria = await Categorias.findById(id);

    if(!categoria){
        return res.status(400).json({msg: "Categoria no encontrada"});
    }
// Si el Id del usuario que actualice no coincide con el Id creador Usuario de las Categorias, sistema no permite actualizar
    if(categoria.creador.toString()  !== req.usuario.id.toString()){
        return res.status(400).json({msg:"accion no valida para este usuario"});
    }

    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.imagen = req.body.imagen || categoria.imagen;

    categoria.save();
    res.json({ categoria })

}

exports.borrarCategoria = async (req, res) => {
    try {
        await Categorias.deleteOne({_id: req.params.id});
        res.json({msg:"categoria eliminada"});
    } catch (error) {
        console.log(error);
    }
}