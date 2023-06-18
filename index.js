const express = require("express");
const connectDb = require("./config/db");
const usuariosRoutes = require("./routes/usuarioRoutes");
const auth = require("./routes/auth");

const app = express();
app.use(express.json({extended: true}));
//Habilitar las expresiones en Json
connectDb();


//rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/auth", auth);





    
app.listen(4000, () => {
    console.log("servidor corriendo en el puerto 4000");
});

