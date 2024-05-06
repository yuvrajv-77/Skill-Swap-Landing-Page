const express = require('express');

const {loginController, registerController, searchUserController} = require('../controllers/UserController');
const { protect } = require('../middleware/AuthMiddleware');
const Router = express.Router();

// url/api/
Router.post('/login',loginController);
Router.post('/register',registerController);
Router.get('/searchUsers',protect, searchUserController)

module.exports = Router;