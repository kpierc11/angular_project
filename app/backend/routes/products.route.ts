import express from 'express';
const router = express.Router();
const userController = require('../controllers/user.controller');
const productController = require('../controllers/product.controller');

/* GET programming languages. */
router.get('/products', productController.getProducts);
  
// /* POST programming language */
// router.post('/', userController.create);

// /* PUT programming language */
// router.put('/:id', userController.update);

// /* DELETE programming language */
// router.delete('/:id', userController.remove);

module.exports = router;