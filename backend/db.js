
const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/chatData',{
    useNewUrlParser:true
}).then(()=>{
    console.log('connection successfull')
}).catch((err)=>console.log(err.message));
