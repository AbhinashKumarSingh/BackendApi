const mongoose=require('mongoose');
const uploadSchema=new mongoose.Schema({
    imagename: String
});
const uploadModel=mongoose.model('upload_files',uploadSchema);

module.exports=uploadModel;