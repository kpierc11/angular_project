import express from 'express';
const router = express.Router();
const userController = require('../controllers/user.controller');

/* GET programming languages. */
router.get('/user', userController.getUser);

// /* POST programming language */
router.post('/login', (req, res) => {
    res.send(JSON.stringify(req.body));
    console.log(req)
});

// /* PUT programming language */
// router.put('/:id', userController.update);

// /* DELETE programming language */
// router.delete('/:id', userController.remove);

module.exports = router;