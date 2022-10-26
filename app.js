//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}));



app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})
