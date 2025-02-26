const mongoose = require('mongoose');

// 定义post类型规则
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    desc:{
        type: String,
        required:true,
    },
    photo:{
        type: String,
        required:false
    },
    username:{
        type: String,
        required:true
    },
    categories:{
        type: Array ,
        required:false
    },
    createDate:{
        type: Date,
    },
    lastUpdateDate:{
        type: Date,
    }
},{timestamps:true});

module.exports = mongoose.model("Post",postSchema)