const ENVIRONMENT = process.env.NODE_ENV || "development";
const sequelize = require("../config/database/connect-database");
const { QueryTypes } = require('sequelize')
const config = require("../config/environments/" + ENVIRONMENT).config;

const apiBaseUrl = config.apiBaseUrl;

//getUsers
async function getUsers() {
  // devolver todos los usuarios de la base de datos 
  try {
    const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT })
    return users;
  } catch (err) {
    throw new Error("Whoops!"); //en catch se retorna así
  }
}

async function postProduct(productInfo) {
  try {
    const { product_name, product_image, product_price, product_stock } = productInfo;
    console.log(productInfo);
    await sequelize.query(`
    INSERT INTO products (product_name, product_image, product_price, product_stock)
    VALUES ("${product_name}", "${product_image}", "${product_price}", "${product_stock}");
    `,
      { type: QueryTypes.INSERT })    
  } catch (err) {
    throw new Error(err); //en catch se retorna así    
  }
}


//getProducts

//updateProducts

//deleteProducts

//updateOrderStatus

module.exports = {
  getUsers,
  postProduct,
}