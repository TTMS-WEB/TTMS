import express from "express";
import PlayInfo from "../models/playInfo";

const router = express.Router();

router.get('/showPlay', (req, res, next)=> {
    PlayInfo.find({}, (err, data)=> {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});

router.post('/addPlay', (req, res, next)=> {
    const playInfo = new PlayInfo(req.body);
    PlayInfo.findOne({playName: playInfo.playName}, (err, result)=> {
        if (err) {
            return next(err);
        }
        else if (!result) {
            playInfo.save((err, addPlayInfo)=> {
                if (!err) {
                    res.send({addResult: true, addPlayInfo});
                }
                else {
                    res.send({addResult: false});
                }
            })
        }
        else {
            res.send({addResult: false});
        }
    })
});

router.post('/searchPlay', (req, res, next)=> {
    if (req.body.searchPlayName === '') {
        PlayInfo.find({}, (err, result)=> {
            res.send(result);
        })
    }
    else {
        PlayInfo.find({playName: req.body.searchPlayName}, (err, resultPlay)=> {
            if (err) {
                return next(err);
            }
            else {
                res.send(resultPlay);
            }

        })
    }
});

router.post('/removePlay',(req,res,next)=>{
    const deletePlayName = req.body.playName;
    PlayInfo.remove({playName:deletePlayName},(err)=>{
        if(err){
            return next(err);
        }
        else{
            PlayInfo.find({},(err,result)=>{
                if(err){
                    return next(err);
                }
                res.send(result);
            })
        }
    })
});


module.exports = router;