// Importacion de variables globales
require("dotenv").config();

// Importacion de MYSQL
const mysql = require("mysql");

//Datos de Conexión
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

//Conexion a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Funcion para evitar desconexion de la DB
setInterval(() => {
  connection.query("SELECT 1");
}, 4000);

// Exportacion del modulo de conexion a la BDD
module.exports = connection;
