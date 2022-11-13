const connection = require("../database/db");

// Query de todos los Productos
const getAllProducts = () => {
  const sql = `SELECT * from product`;
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Query para obtener producto por nombre
const getProduct = (name) => {
  const sql = `SELECT * from product where name like ?`;
  return new Promise((resolve, reject) => {
    connection.query(sql, ["%" + name + "%"], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Query que trae productos por categorias
const getProductByCategory = (id) => {
  const sql = `SELECT z.id AS id_producto,x.id AS id_categoria,z.name,x.name AS nombreC,price,url_image FROM product z JOIN category x ON (z.category=x.id) WHERE x.id = ?`;
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Query para nombres de categorias
const getAllCategory = () => {
  const sql = `SELECT * from category`;
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllProducts,
  getProduct,
  getProductByCategory,
  getAllCategory,
};
