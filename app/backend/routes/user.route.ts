import express from 'express';
const router = express.Router();
import { UserController } from '../controllers/user.controller';

const userController = new UserController();

/* GET programming languages. */
router.get('/user', userController.getAllUsers);

// /* POST programming language */
router.post('/login', userController.loginUser);
router.post('/register', userController.addUser);

// /* PUT programming language */
// router.put('/:id', userController.update);

// /* DELETE programming language */
// router.delete('/:id', userController.remove);

module.exports = router;