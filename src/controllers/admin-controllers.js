const adminServices = require("../services/admin-services");

async function getUsers(req, res) {
  try {
    const users = await adminServices.getUsers();
    res.status(200).json({
      status: 200,
      data: users,
      message: "Users retrieved succesfully"
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Users not retrieved" });
  }
}

//adminController.postProduct
async function postProduct(req, res) {
  const productInfo = req.body;
  if (
    !productInfo.product_name ||
    !productInfo.product_image ||
    !productInfo.product_price ||
    !productInfo.product_stock
  ) {
    res.status(400).json({ status: 400, message: "No funca" });
    console.log(err);
  }

  try {
    await adminServices.postProduct(productInfo); //aquí solo le paso el body
    res.status(201).json({
      status: 201,
      message: "A new resource was successfully created"
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Bad request" });
    console.log(err);
  }
}

//adminController.getProducts

//adminController.updateProducts

//adminController.deleteProducts

//adminController.updateOrderStatus

module.exports = {
  getUsers,
  postProduct
};
