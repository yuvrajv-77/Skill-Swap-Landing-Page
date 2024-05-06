const TheUser = require("../models/UserModel");

const ExAsyncHandler = require("express-async-handler");

const getAllUsers = ExAsyncHandler(async (req, res) => {
    try{
        const users = await TheUser.find({});
        res.json(users);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
    
})

module.exports = { getAllUsers };