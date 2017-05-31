import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const UserInfo = mongoose.model('UserInfo',{
    _id:Number,
    playName:String,
    playTime:String,
    playType:String,
    playActor:String,
    playPrice:String
});

export default UserInfo;