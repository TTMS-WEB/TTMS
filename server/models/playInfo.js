import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const PlayInfo = mongoose.model('PlayInfo',{
    playName:String,
    playTime:String,
    playType:String,
    playActor:String,
    playPrice:String
});

export default PlayInfo;