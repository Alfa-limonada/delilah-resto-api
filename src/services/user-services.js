
const ENVIRONMENT = process.env.NODE_ENV || "development";
const sequelize = require("../config/database/connect-database");
const {QueryTypes} = require('sequelize')
const config = require("../config/environments/" + ENVIRONMENT).config;

const apiBaseUrl = config.apiBaseUrl;

async function getAllUsers() {
  // devolver todos los usuarios de la base de datos 
  try {
    const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT })
    return users;
  } catch(err) {
    throw new Error("Whoops!"); //en catch se retorna así
  }
}

//getProducts

//postUsers

//postOrders


module.exports = {
  getAllUsers, 
}

