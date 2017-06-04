import express from 'express';
let router = express.Router();

import Seat from '../models/Seat';
import Schedule from '../models/Schedule';

router.get('/onSale/:ScheduleId', (req, res, next)=> {
    Schedule.findOne({_id: req.params.ScheduleId}, (err, data)=> {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});
router.post('/buyTicket', (req, res, next)=> {
    Schedule.findOne({_id:req.body.ScheduleId}, (err, data)=> {
        if (err) {
            return next(err);
        }
        let location = req.body.location;
        location.map((ele)=>data.TicketArray[ele].status=1);
        data.save((err, doc)=> {
            if (err) {
                return next(err);
            }
            res.send(doc);
        });
    })
});

module.exports = router;