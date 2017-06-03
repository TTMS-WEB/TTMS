import express from 'express';
let router = express.Router();

import Seat from '../models/Seat';
import Schedule from '../models/Schedule';

router.get('/sale/:studioId', (req, res, next)=> {
    Schedule.findOne({playPlanId: req.params.playPlanId}, (err, data)=> {
        if (err) {
            return next(err);
        }

        res.send(data);
    })
});
router.post('/buyTicket', (req, res, next)=> {
    Seat.findOne({studioId:req.body.studioId}, (err, data)=> {
        if (err) {
            return next(err);
        }
        let location = req.body.location;
        location.map((ele)=>data.seatArray[ele].status=1);
        data.save((err, doc)=> {
            if (err) {
                return next(err);
            }
            res.send(doc);
        });
    })
});

module.exports = router;