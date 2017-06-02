import express from "express";
import PlayPlan from "../models/playPlan"

const router = express.Router();

router.post('/showPlan', (req, res, next)=> {
    PlayPlan.find({},(err,result)=>{
        if(err){
            next(err);
        }
       res.send(result);
    })
});

module.exports = router;