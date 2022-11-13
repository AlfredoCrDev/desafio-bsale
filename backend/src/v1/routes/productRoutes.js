//Importacion de la lib express para su uso
const express = require("express");

//Instanciar Router de lib de express para modularizar las rutas
const router = express.Router();

// Importacion de los controladores
const productController = require("../../controllers/productController");

//Rutas base
router
  // Ruta de todos los productos
  .get("/products", productController.getAllProducts)

  // //Ruta de un producto
  .get("/product/:name?", productController.getProduct)

  //Ruta de las categorias
  .get("/allcategory", productController.getAllCategory)

  //Ruta de productos por categorias
  .get("/category/:name", productController.getProductByCategory);

//Exportacion de los modulos
module.exports = router;
