import express from 'express';
import Studios from '../models/Studios';

const router = express.Router();

router.get('/studios',(req,res,next)=>{
    Studios.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

module.exports = router;
