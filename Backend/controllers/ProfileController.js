const TheUser = require("../models/UserModel");

const ExAsyncHandler = require("express-async-handler");


const ProfileUpdateController = ExAsyncHandler(async (req, res) => {

    try {
        const userId = req.params.userId;
        const { skills, expertise, city, experience, education, college, age } = req.body;

        // Find the user by ID
        const user = await TheUser.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user's skills and expertise
        user.skills = skills;
        user.expertise = expertise;
        user.city = city;
        user.experience = experience;
        user.education = education;
        user.college = college;
        user.age = age;
        

        // Save the updated user object
        await user.save();

        // Respond with the updated user object
        res.json({message: "Profile Updated Successfully" ,updated: user});
        console.log("Profile Updated Successfully");
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Error in updating profile' });
    }
})
module.exports = { ProfileUpdateController };