import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Schedule = mongoose.model('Schedule', {
    playPlanId: Number,
    TicketArray: [{status: Number}]  //-1 已坏,0 未售出,1 已售
});

export default Schedule
