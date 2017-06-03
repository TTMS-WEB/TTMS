import mongoose  from 'mongoose';
mongoose.Promise = require('bluebird');

const Schedule = mongoose.model('Schedule', {
    ScheduleName: String,
    ScheduleStudio: Number,
    ScheduleDate:Date,
    ScheduleTime: Number,
    ScheduleActor:String,
    SchedulePrice:Number,
    TicketArray: [{status: Number}]  //-1 已坏,0 未售出,1 已售
});

export default Schedule
