import express from 'express';
const router = express.Router();
import {UserController} from '../controllers/user.controller';
const productController = require('../controllers/product.controller');
const userController = new UserController();


/* GET programming languages. */
router.get('/products', productController.getProducts);
  
// /* POST programming language */
// router.post('/', userController.create);

// /* PUT programming language */
// router.put('/:id', userController.update);

// /* DELETE programming language */
// router.delete('/:id', userController.remove);

module.exports = router;