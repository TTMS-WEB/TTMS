import express from 'express';
import PlayInfo from '../models/playInfo';

const router = express.Router();

router.get('/showPlay',(req,res,next)=>{
    PlayInfo.find({},(err,data)=>{
        if(err){
          return next(err);
        }
        res.send(data);
    })
});

module.exports = router;