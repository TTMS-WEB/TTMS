import express from "express";
import PlayInfo from "../models/playInfo";

const router = express.Router();

router.post('/showPlay', (req, res, next)=> {
    PlayInfo.find({}, (err, result)=> {
        const page = req.body.page;
        const size = 8;
        const skip = (page - 1) * size;
        const maxsize = result.length;

        PlayInfo.find({}, (err, data)=> {
            if (err) {
                return next(err);
            }
            res.send({data, maxsize, size});
        }).limit(size).skip(skip);

    });


});

router.post('/addPlay', (req, res, next)=> {
    const playInfo = new PlayInfo(req.body.newPlay);
    PlayInfo.findOne({playName: playInfo.playName}, (err, result)=> {
        if (err) {
            return next(err);
        }
        else if (!result) {
            playInfo.save((err)=> {
                if (!err) {
                    res.send({addResult: true});
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
    PlayInfo.find({playName: req.body.searchPlayName}, (err, resultPlay)=> {
        if (err) {
            return next(err);
        }
        else {
            res.send(resultPlay);
        }

    })

});

router.post('/removePlay', (req, res, next)=> {
    const deletePlayName = req.body.playName;
    PlayInfo.remove({playName: deletePlayName}, (err)=> {
        if (err) {
            return next(err);
        }
        res.end();
    })
});

router.post('/modifyPlay', (req, res, next)=> {
    const newPlay = req.body.newPlay;
    PlayInfo.update({'playName': newPlay.newPlayName}, {
        'playTime': newPlay.newPlayTime,
        'playActor': newPlay.newPlayActor,
        'playPrice': newPlay.newPlayPrice,
        'playType': newPlay.newPlayType
    }, (err)=> {
        if (err) {
            return next(err);
        }
        res.end();
    })
});
module.exports = router;