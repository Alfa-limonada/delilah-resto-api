const adminController = require('../controllers/admin-controllers');
const express = require('express');
const adminRoutes = express.Router()
const configDevelopment = require('../config/environments/development') //pensar nombre variable bien
const apiBaseUrl = configDevelopment.config.apiBaseUrl; //http://localhost:" + this.port + "/api/v1/

//Una ruta tiene dos parametros: el primero es la ruta y el segundo es el controlador sin ()

adminRoutes.get(`/api/v1/users`, adminController.getUsers);

adminRoutes.post(`/api/v1/product`, adminController.postProduct);

//adminRoutes.post(`/api/v1/users`, adminController.getProducts)

//adminRoutes.put(`/api/v1/users`, adminController.updateProducts)

//adminRoutes.delete(`/api/v1/users`, adminController.deleteProducts)

//adminRoutes.patch(`/api/v1/users`, adminController.updateOrderStatus)


module.exports = adminRoutes


