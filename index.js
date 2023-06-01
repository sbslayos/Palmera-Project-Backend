const express = require("express");
const connectDb = require("./config/db");

const app = express();

connectDb();

app.listen(4000, () => {
    console.log("servidor corriendo en el puerto 4000");
});

