const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://sbspalmera:adminpalmera2023@cluster0.uwbgkhz.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,

            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MondoDb conectado en :${url}`);

    } catch (error) {
        console.log(`error:${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDb;
