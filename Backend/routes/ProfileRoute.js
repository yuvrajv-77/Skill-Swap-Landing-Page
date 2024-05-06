const express = require('express');

const {ProfileUpdateController} = require('../controllers/ProfileController');
const { protect } = require('../middleware/AuthMiddleware');

const Router = express.Router();

// url/api/
// Router.get('/',protect,UserProfileController);
Router.post('/:userId',protect, ProfileUpdateController);


module.exports = Router;