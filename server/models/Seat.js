import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Seat = mongoose.model('Seat', {
    studioId: Number,
    seatArray:[{
        key:{},
        status:Number //-1 已坏,0 未售出, 1 已售出
    }]
});

export default Seat
