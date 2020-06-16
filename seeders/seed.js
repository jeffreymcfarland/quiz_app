let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/trivia", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let questionSeed = [
  {
    question: "What is my name?",
    answer1: "Jeffrey McFartland",
    answer2: "Seth McFarlane",
    answer3: "Donald Trump",
    correctAnswer: "Jeffrey McFarland"
  },
  {
    question: "What is my favorite color?",
    answer1: "Red",
    answer2: "Turquoise",
    correctAnswer: "Steel Blue",
    answer3: "Green"
  }
];

let playerSeed = [
  {
    initials: "JLM",
    score: 20
  },
  {
    initials: "RMM",
    score: 10
  }
];

db.Question.deleteMany({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Player.deleteMany({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
