const express = require('express');
const {accessChatController, fetchChatController} = require('../controllers/ChatController');
const { protect } = require('../middleware/AuthMiddleware');
const Router = express.Router();

// url/chat/
Router.post('/', protect, accessChatController);
Router.route('/').get(protect, fetchChatController);
// Router.route('/group').post(protect, createGroupController);
// Router.route('/rename').put(protect, remaneGroupController);
// Router.route('/groupremove').put(protect, removeGroupController);
// Router.route('/groupadd').put(protect, addGroupController);

module.exports = Router;