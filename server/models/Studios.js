import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Studios = mongoose.model('Studios',{

    id:Number,
    col:Number,
    row:Number,
});

export default Studios
