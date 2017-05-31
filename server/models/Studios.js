import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Studios = mongoose.model('Studios',{
    _id:Number,
    cul:Number,
    row:Number,
});

export default Studios
