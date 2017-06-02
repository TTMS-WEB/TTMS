import mongoose from "mongoose";
mongoose.Promise = require('bluebird');

const PlayPlan = mongoose.model('PlayPlan',
    {
        planName: String,
        planStudio: Number,
        planTimeStart: Date,
        planTimeEnd: Date,
        planPrice: Number,
        planLong: Number
    });

export default PlayPlan;