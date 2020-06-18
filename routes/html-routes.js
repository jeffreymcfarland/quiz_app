// const path = require("path")
const router = require("express").Router();

// ROUTE TO exercise.html
router.get("/", (req, res) => {
    res.render("index");
});


module.exports = router;