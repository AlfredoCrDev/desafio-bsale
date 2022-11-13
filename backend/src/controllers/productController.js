/* Controladores de las rutas */

// Importacion de los servicios
const productService = require("../services/productService");

// Controlador para obtener todos los productos
const getAllProducts = async (req, res) => {
  res.json(await productService.getAllProducts(req.query));
};

// Controlador para obtener las categorias
const getAllCategory = async (req, res) => {
  res.json(await productService.getAllCategory(req.query));
};

// Controlador para obtener un producto
const getProduct = async (req, res) => {
  const { name } = req.params;
  if (!name) {
    res.json(await productService.getAllProducts(req.query));
  } else {
    res.json(await productService.getProduct(name));
  }
};

//Controlador para obtener productos por categorias
const getProductByCategory = async (req, res) => {
  const { name } = req.params;
  res.json(await productService.getProductByCategory(name));
};

// Exportacion de los controladores
module.exports = {
  getAllProducts,
  getProduct,
  getProductByCategory,
  getAllCategory,
};
