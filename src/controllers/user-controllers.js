
const userService = require('../services/user-services');

// Esto es un controlador: 

async function getAllUsers(req, res) {
    try { 
        const users = await userService.getAllUsers();
        res.status(200).json({
            status: 200,
            data: users,
            message: "Succesfully users Retrieved"
        })
    } catch(err) {
        res.status(400).json({ status: 400, message: "Users not retrieved" });
    }  
}

//userController.getProducts

//userController.postUsers

//userController.postOrders


module.exports = {
  getAllUsers  
}



