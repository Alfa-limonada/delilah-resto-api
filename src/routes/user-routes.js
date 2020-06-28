const userController = require('../controllers/user-controllers');
const express = require('express');
const userRoutes = express.Router()
const configDevelopment = require('../config/environments/development') //pensar nombre variable bien
const apiBaseUrl = configDevelopment.config.apiBaseUrl; //http://localhost:" + this.port + "/api/v1/

//Una ruta tiene dos parametros: el primero es la ruta y el segundo es el controlador sin ()
userRoutes.get(`/api/v1/users`,userController.getAllUsers) //No hay que poner htttp, localgost ni el puerto 
//porque express ya lo sabe, basta con poner la ruta luego del puerto
// userRoutes.post() // post es para crear un usuario
// userRoutes.put() //put para actualizar (buscar que hace el verbo patch)

module.exports = userRoutes

