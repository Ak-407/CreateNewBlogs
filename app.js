const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/test',  {useNewUrlParser: true});
const Blog = mongoose.Schema({
    title:String,
    content:String,
});

const blogs = mongoose.model("blogs", Blog);




var data = ["hello", "amaan", "thr"];






app.get("/", function(req,res){
    var today = new Date();
    var year = today.getFullYear();
    blogs.find({}, function(err, finditems){
        res.render('list', {day:year , item:finditems});
    })
})

app.post("/", function(req,res){
    var title = req.body.title;
    var content = req.body.content;
    const blog2 = new blogs({
        title:title,
        content:content
    })
    blog2.save();
    console.log(data);
    res.redirect("/");
})










app.listen("300", function(req,res){
    console.log("Port is running under 300.");
})
