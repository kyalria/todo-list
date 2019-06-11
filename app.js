 //jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const day=require(__dirname+"/date.js");
console.log(day());


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


let newitem=[];
let workitem=[];
app.get("/", function(req, res){
  console.log(req.body);

  res.render( 'list',{foo:day(),item:newitem});
});


app.get("/work",function(req,res){
  res.render('list',{foo:"work list",item:workitem});
});


app.post("/work",function(req,res){
  let item=req.body.todo;
  workitem.push(item);
  res.redirect("/work");
});



app.post("/" ,function(req,res){
  let item=req.body.todo;
if(req.body.button==='work')
{
  workitem.push(item);
  res.redirect("/work");
}else{
  newitem.push(item);
  res.redirect("/");
}


});


app.get("/about",function(req,res){
  res.render("about");
});



app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
