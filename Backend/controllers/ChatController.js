const Chat = require("../models/ChatModel");
const TheUser = require("../models/UserModel");

const ExAsyncHandler = require("express-async-handler");

// controller for making a chat between two users
const accessChatController = ExAsyncHandler(async (req, res) => {
	console.log('accessChatController called');
	const { userId } = req.body;		// other User's id to chat with

	if (!userId) {
		console.log("Userid param not sent with request");
		return res.status(400);
	}
	// check if chat already exists between the two users
	var isChat = await Chat.find({
		isGroupChat: false,
		$and: [
			{ users: { $elemMatch: { $eq: req.user._id } } },	// current user. in auth middleware, we have attached user to req
			{ users: { $elemMatch: { $eq: userId } } },		// other user
		],
	})
		.populate("users", "-password")	// populate users field with all fields except password
		.populate("latestMessage");		// populate latestMessage field

	isChat = await TheUser.populate(isChat, {	// populate latestMessage.sender field with name, avatar, email
		path: "latestMessage.sender",
		select: "name avatar email",
	});

	// if chat already exists, return the chat
	if (isChat.length > 0) {
		res.send(isChat[0]);
	} else {
		var chatData = {
			chatName: "sender",
			isGroupChat: false,
			users: [req.user._id, userId],
		};

		try{
			const createdChat = await Chat.create(chatData);
			const FullChat = await Chat.findOne({_id:createdChat._id}).populate(
				"users",'-password'
			);
			res.status(200).send(FullChat);
		}catch(error){
			res.status(400);
			throw new Error('Error Creating chat')
		}
	}
	
});

const fetchChatController = ExAsyncHandler(async (req, res) => {
	try{
		await Chat.find({
			users: { $elemMatch: { $eq: req.user._id } },
		})
			.populate("users", "-password")
			.populate("latestMessage")
			.populate("latestMessage.sender", "name avatar email")
			.sort({ updatedAt: -1 })
			.then(async (results) => {
				results = await TheUser.populate(results, {
				  path: "latestMessage.sender",
				  select: "name avatar email",
				});
				res.status(200).send(results);
			});	
	}catch(error){
		res.status(400);
		console.log("❌📩❌ error in fetching chats ",error);

	}
	

});
module.exports = {accessChatController, fetchChatController};