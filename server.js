var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

var routeIndx = require("./routes/index");

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use("/", routeIndx);

io.on("connection", function(socket){
	socket.on("chat message", function(msg){
		io.emit("chat message", msg);
	});
});

http.listen(8000);
