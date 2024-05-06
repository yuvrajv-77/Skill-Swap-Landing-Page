const express = require('express');
const { protect } = require('../middleware/AuthMiddleware');
const { sendMessageController, getAllMessagesController } = require('../controllers/MessageController');
const Router = express.Router();

//  /api/messages
Router.post('/', protect, sendMessageController);
Router.get('/:chatId', protect, getAllMessagesController);


module.exports = Router;