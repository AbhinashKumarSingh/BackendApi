const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const router=require("./routes/index")
app.listen(5000,()=>{
    console.log("server is created")
})
app.use('/uploads',express.static('uploads'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}));
app.get("/api",(req,res)=>{
    res.send("Hello");
})
var multer = require('multer');
var upload = multer({dest:'uploads/'});
app.use("/api",router)