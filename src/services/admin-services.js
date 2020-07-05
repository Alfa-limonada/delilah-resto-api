const ENVIRONMENT = process.env.NODE_ENV || "development";
const sequelize = require("../config/database/connect-database");
const {QueryTypes} = require('sequelize')
const config = require("../config/environments/" + ENVIRONMENT).config;

const apiBaseUrl = config.apiBaseUrl;

//postProducts

//getProducts

//updateProducts

//deleteProducts

//updateOrderStatus

