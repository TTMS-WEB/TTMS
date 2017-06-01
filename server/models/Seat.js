import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Seat = mongoose.model('Seat', {
    studioId: Number,
    seatArray: [{status: Number}]  //-1 已坏/已售,0 未售出
});

export default Seat
