var express = require("express");
var app = express();
var path = require("path");
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // bootstrap css include
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // bootstrap js include
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist")); // jquery include
/* *****
Image Includes:
***** */
app.use(express.static(__dirname + "/home_library/img"));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/home_library/index.html"));
});
app.listen(8080);