import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Studios = mongoose.model('Studios',{

    id:Number,
    studioName:String,
    studioInfo:String,
    col:Number,
    row:Number,
});

export default Studios
