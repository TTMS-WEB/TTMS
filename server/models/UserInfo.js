import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const UserInfo = mongoose.model('UserInfo',{
    username:String,
    password:String,
    phone:Number
});

export default UserInfo;