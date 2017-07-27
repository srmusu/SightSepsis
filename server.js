var express = require("express");
var path = require("path");
//var bodyparser = require("body-parser");
var app = express();
//app.use(bodyparser.json());
app.use(express.static("home_library"));

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "/home_library/index.html"));
});
app.get("/evaluate", function(req, res) {
    req.body.foreach(function(i) {
        
    });
});
app.get("https://management.azure/com/", function(req, res) {
    // POST REQUEST to frontend
    console.log(req.url);
});
app.listen(8080);