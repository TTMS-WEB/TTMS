import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Studios = mongoose.model('Studios',{
<<<<<<< HEAD
    _id:Number,
    cul:Number,
=======
    id:Number,
    col:Number,
>>>>>>> 1c3f29d234646e2a25afb6678970c9a57f3a2764
    row:Number,
});

export default Studios
