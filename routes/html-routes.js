const path = require("path")
const router = require("express").Router();

// ROUTE TO exercise.html
router.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});

module.exports = router;