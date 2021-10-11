const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequileze = require('./back/db/conexion');

const app = express();
app.use(cors());
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
    }
}

serverStart();






