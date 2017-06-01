import express from 'express';
const router = express.Router();

import Studios from '../models/Studios';
import Seat from '../models/Seat';

router.get('/studioInfo',(req,res,next)=>{
    Studios.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

router.post('/generateSeat',(req,res,next)=>{
    let seat = new Seat(req.body);
    seat.save((err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

router.get('/changeSeatStatus/:location',(req,res,next)=>{
    const location = req.params.location.split(',');
    Seat.find({locationX:location[0],locationY:location[1]},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});
module.exports=router;