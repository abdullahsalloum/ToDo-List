const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); 


const app = express();
const Items = ["Buy food" , "Cook food" , "Eat food"];
const workItems = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.set('view engine' , 'ejs' );


app.get("/" ,(req , res)=> {
   const day = date.getDate();

     res.render("list" , {ListTitle: day , newListItems : Items});
})


app.post("/" , function(req , res){ 
  const Item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(Item );
    res.redirect("/work");
  }else{
    Items.push(Item);
   res.redirect("/"); 
  }
  
  
})



app.get("/work" , function(req ,res){
    res.render("list" , {ListTitle: "Work List" , newListItems : workItems});
});



app.listen(3000 , function(){
    console.log("the server has started on port 3000");
})