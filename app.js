var express = require("express");
var app = express();

app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');
// res.send("Hello");
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
