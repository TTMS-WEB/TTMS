import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const UserInfo = mongoose.model('UserInfo',{
    _id:Number,
    username:String,
    password:String,
    phone:Number
});

export default UserInfo;