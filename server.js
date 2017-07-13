var express = require("express");
var path = require("path");
var app = express();
app.use(express.static("home_library"));
app.get("/", function (req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, "/home_library/index.html"));
});
app.listen(8080);