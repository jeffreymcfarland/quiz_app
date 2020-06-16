
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    
    question: {
        type: String,
        required: "Enter valid string.",
        minlength: 1
    },
    answer1: {
        type: String,
        required: "Enter valid string.",
        minlength: 1
    },
    answer2: {
        type: String,
        required: "Enter valid string.",
        minlength: 1
    },
    answer3: {
        type: String,
        required: "Enter valid string.",
        minlength: 1
    },
    correctAnswer: {
        type: String,
        required: "Enter valid string.",
        minlength: 1
    },
    points: {
        type: Number,
        default: 10,
    }
    
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;