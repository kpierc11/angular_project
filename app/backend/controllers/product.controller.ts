const productModel = require('../models/products.model');

async function getProducts(req: any, res: any, next: any) {
  try {
    
    const user = await productModel.getProducts();
    res.json(user);
  } catch (err) {
    console.error("Couldn't return user", err.message);
  }
}

module.exports = { getProducts };