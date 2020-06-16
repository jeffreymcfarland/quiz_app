
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({

    
    initials: {
        type: String,
        required: "Enter valid string.",
        uppercase: true,
        unique: true
    },
    score: {
        type: Number
    }
    
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;