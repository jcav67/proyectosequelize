const express = require("express");
const cors = require("cors");
const dbconnect = require("./database/bdconnection");
const Song = require("./models/cancion");
require('dotenv').config();



const app = express();

//Middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(cors());


//Rutas
app.use("/api/cancion",require('./routes/canciones.routes'));
app.get("*", (req, res) => {
    res.status(404).send("Error ruta no encontrada");
});
app.post("*", (req, res) => {
    res.status(404).send("Error ruta no encontrada");
});
app.put("*", (req, res) => {
    res.status(404).send("Error ruta no encontrada");
});
app.delete("*", (req, res) => {
    res.status(404).send("Error ruta no encontrada");
});

//Levantamiento del servidor
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port 8080`)
    dbconnect.authenticate().then(()=>{
        console.log('Base de datos en linea');
    })
    .catch(error=>{
        console.log(`no fue posible conectarse error = ${error}`)
    });

    Song.sync().then(()=>{
        console.log('sincronizacion correcta');
    })
    .catch(error=>{
        console.log(`no fue posible sincronizar error = ${error}`)
    });
})