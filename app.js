const express = require("express");
const bodyParser = require("body-parser");
const today = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items=[];

app.get("/", function(req, res){
    let day = today();

    res.render("list", {day: day, items: items});
});

app.post("/", function(req, res){
    items.push(req.body.addToList);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});