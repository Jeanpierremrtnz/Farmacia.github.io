"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
// Configura la conexión a la base de datos MySQL
var db = mysql.createConnection({
    host: 'localhost',
    user: 'roott',
    password: 'farmacia@69',
    database: 'phpmyadmin',
});
// Conectarse a la base de datos
db.connect(function (error) {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
    else {
        console.log('Conexión exitosa a la base de datos');
    }
});
//Crea una instancia de Express y configura el middleware necesario:
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Configura la conexión a la base de datos MySQL:
//Define una ruta para recibir las solicitudes POST en '/api/productos':
app.post('/api/productos', function (req, res) {
    // Realiza las operaciones de inserción en la base de datos utilizando db.query()
    // ...
    // Envía la respuesta al cliente
    res.json({ mensaje: 'Producto ingresado correctamente', exito: true });
});
app.get('/api/productos', function (req, res) {
    // Lógica para obtener los productos desde la base de datos u otra fuente de datos
    // ...
    // Envía la respuesta al cliente
    res.json({ productos: [], mensaje: 'Lista de productos obtenida correctamente' });
});
app.get('/api/productos', function (req, res) {
    var consulta = 'SELECT * FROM productos';
    db.query(consulta, function (error, resultados) {
        if (error) {
            console.error('Error al obtener los productos:', error);
            res.status(500).json({ mensaje: 'Error al obtener los productos' });
        }
        else {
            res.json({ productos: resultados, mensaje: 'Lista de productos obtenida correctamente' });
        }
    });
});
//Inicia el servidor para escuchar en un puerto específico:
var puerto = 3002; // Puedes cambiar el puerto si es necesario
app.listen(puerto, function () {
    console.log("Servidor backend iniciado en el puerto ".concat(puerto));
});
