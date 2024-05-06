const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    category: { type: String, required: true },
    level: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    // Other fields as needed
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
