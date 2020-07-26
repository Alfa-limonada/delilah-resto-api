
const ENVIRONMENT = process.env.NODE_ENV || "development";
const sequelize = require("../config/database/connect-database");
const { QueryTypes } = require('sequelize')
const config = require("../config/environments/" + ENVIRONMENT).config;

const apiBaseUrl = config.apiBaseUrl;

//postUsers
async function postUser(userData) {
  try {
    const { user_name, user_email, user_full_name, user_phone, user_address, user_password, user_rol } = userData;
    console.log(userData);
    await sequelize.query(`
    INSERT INTO delilah_resto_api.users
    (user_name, user_email, user_full_name, user_phone, user_address, user_password, user_rol, created_at)
    VALUES("${user_name}", "${user_email}", "${user_full_name}", "${user_phone}", "${user_address}", "${user_password}", "${user_rol}", CURRENT_TIMESTAMP);
    `,
      { type: QueryTypes.INSERT })
  } catch (err) {
    throw new Error(err); //en catch se retorna así    
  }
}

//getProducts
async function getProducts() {
  try {
    const products = await sequelize.query("SELECT * FROM `products`", { type: QueryTypes.SELECT })
    return products;
  } catch (err) {
    throw new Error(err); //en catch se retorna así
  }
}




//postOrders


module.exports = {
  postUser,
  getProducts  
}

