const express=require("express");
require("../db")
const router=express.Router();
var multer = require('multer');
//var// upload = multer({dest:'uploads/'});
const User=require("../models/schema");
const uploadModel=require("../models/schema")
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/') 
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})

router.post("/create",upload.single('image'),async(req,res)=>{
    console.log(req.file);
    const {name,summary,image}=req.body;
    const createUser=new User({name:name,summary:summary,image:req.file.path});
    const result=await createUser.save();
    res.send(result)

    
})
router.post("/update/name",async(req,res)=>{
    const {name,updatedName}=req.body;
    const result=await User.findOne({name:name})
    result.name=updatedName;
    result.save();
    console.log(result.name)
})
router.post("/update/summary",async(req,res)=>{
    console.log(req.body)
    const {summary,updatedSummary}=req.body;
    const result=await User.findOne({summary:summary});
    result.summary=updatedSummary;
    await result.save();
    /////////
    console.log(result)
})
router.delete ("/delete",async(req,res)=>{
    const {name}=req.body;
    const result=await User.deleteOne({name:name})
    
    console.log(result);
})
router.put("/update/image",upload.single('image'),async(req,res)=>{
    console.log(req.file);
    const {name,image}=req.body;
    const result=await User.findOne({name:name});
    result.image=req.file.path;
    await result.save()
    res.send(result)
})

module.exports= router
