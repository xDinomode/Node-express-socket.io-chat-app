var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
	res.render('index', {name: "John"});
});

router.get("/chat", function(req, res, next){
	res.render("chatview", {name: "John"});
});

module.exports = router;