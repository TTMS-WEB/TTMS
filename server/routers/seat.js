import express from 'express';
const router = express.Router();

import Studios from '../models/Studios';

router.get('/rowCol/:id',(req,res,next)=>{
    console.log(req.params.id);
    Studios.find({"_id":"req.params.id"},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })

});
module.exports=router;