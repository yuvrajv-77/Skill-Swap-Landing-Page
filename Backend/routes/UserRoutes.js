const express = require('express');

const {loginController, registerController, searchUserController} = require('../controllers/UserController');
const { protect } = require('../middleware/AuthMiddleware');
const { getAllUsers } = require('../controllers/getUsers');
const Router = express.Router();

// url/api/
Router.post('/login',loginController);
Router.post('/register',registerController);
Router.get('/searchUsers',protect, searchUserController)
Router.get('/getallusers',getAllUsers )

module.exports = Router;