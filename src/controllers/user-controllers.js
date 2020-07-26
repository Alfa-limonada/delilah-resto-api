
const userServices = require('../services/user-services');

//userController.postUser
async function postUser(req, res) {
  const userData = req.body;
  // if (
  //   !userData.user_name ||
  //   !userData.user_email ||
  //   !userData.user_full_name ||
  //   !userData.user_phone ||
  //   !userData.user_address ||
  //   !userData.user_password ||
  //   !userData.user_roll    
  // ) {
  //   res.status(400).json({ status: 400, message: "Bad request" });
  //   //console.log(err);
  // }

  try {
    await userServices.postUser(userData); //aquí solo le paso el body
    res.status(201).json({
      status: 201,
      message: "A new resource was successfully created"
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Bad request" });
    console.log(err);
  }
}


//userController.getProducts
async function getProducts(req, res) {
    try {
      const products = await userServices.getProducts();
      res.status(200).json({
        status: 200,
        data: products,
        message: "Products retrieved succesfully"
      });
    } catch (err) {
      res.status(400).json({ status: 400, message: "Products not retrieved" });
    }
  }







//userController.postOrders


module.exports = { 
  postUser, 
  getProducts  
}



