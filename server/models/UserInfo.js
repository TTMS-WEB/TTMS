import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const UserInfo = mongoose.model('UserInfo',{
    username:String,
    email:String,
    password:String,
    phone:Number,
    address:String
});

export default UserInfo;