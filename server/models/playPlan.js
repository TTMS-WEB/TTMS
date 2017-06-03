import mongoose from "mongoose";
mongoose.Promise = require('bluebird');

const PlayPlan = mongoose.model('PlayPlan',
    {
        planName: String,
        planStudio: Number,
        date:Date,
        time: Number
    });

export default PlayPlan;