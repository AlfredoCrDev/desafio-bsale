//Importacion de la lib express para su uso
const express = require("express");

// Improtar lib CORS para poder consumir API
const cors = require("cors");

//Importacion de la ruta raiz v1
const v1ProductRouter = require("./v1/routes/productRoutes");

// Config del servidor con express
const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors());

app.use(express.json());

// Concatenacion de la ruta raiz especificando la Version de la ruta
app.use("/api/v1/", v1ProductRouter);

app.listen(PORT, () => {
  console.log(`Servidor Escuchando en puerto ${PORT}`);
});
