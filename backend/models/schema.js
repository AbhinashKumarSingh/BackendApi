

const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    summary:{
        type:String
    }
});
const User=mongoose.model('User',userSchema);

module.exports=User;