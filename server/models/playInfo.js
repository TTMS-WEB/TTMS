import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const PlayInfo = mongoose.model('PlayInfo',{
    playName:String,
    playTime:Number,
    playType:String,
    playActor:String,
    playPrice:Number
});

export default PlayInfo;