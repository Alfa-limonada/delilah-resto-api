const userController = require('../controllers/user-controllers');
const express = require('express');
const userRoutes = express.Router()
const configDevelopment = require('../config/environments/development') //pensar nombre variable bien
const apiBaseUrl = configDevelopment.config.apiBaseUrl; //http://localhost:" + this.port + "/api/v1/

//Una ruta tiene dos parametros: el primero es la ruta y el segundo es el controlador sin ()

//userRoutes.get(`/api/v1/users`, userController.getProducts)
userRoutes.get(`/api/v1/products`, userController.getProducts); //No hay que poner htttp, localgost ni el puerto
//userRoutes.post(`/api/v1/users`, userController.postUsers)
userRoutes.post(`/api/v1/user`, userController.postUser)
//userRoutes.post(`/api/v1/users`, userController.postOrders)


module.exports = userRoutes

