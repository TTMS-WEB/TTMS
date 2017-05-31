import express from 'express';
import UserInfo from '../models/UserInfo';

const router = express.Router();

router.get('/allEmployees',(req,res,next)=>{
    UserInfo.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

module.exports = router;