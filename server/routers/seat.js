import express from 'express';
const router = express.Router();

import Studios from '../models/Studios';
import Seat from '../models/Seat';

router.get('/studioInfo', (req, res, next)=> {
    Studios.find({}, (err, data)=> {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});

router.post('/generateSeat', (req, res, next)=> {
    Seat.findOne({studioId: req.body.studioId}, (err, data)=> {
        if (err) {
            return next(err);
        }
        if (data == null) {
            let seat = new Seat(req.body);
            seat.save((err, data)=> {
                if (err) {
                    return next(err);
                }
                res.send(data);
            });
        }
        else {
            res.send(data);
        }
    });
});


router.post('/changeSeatStatus', (req, res, next)=> {
    let i = req.body.i;

    Seat.findOne({studioId: req.body.studioId}, (err, data)=> {
        if (err) {
            return next(err);
        }
        let t = data.seatArray[i].status;
        if (t == 0) {
            data.seatArray[i].status = -1;
            data.save((err, doc)=> {
                if (err) {
                    return next(err);
                }
                res.send("座位不可用");
            });
        }
        if (t == -1) {
            data.seatArray[i].status = 0;
            data.save((err, doc)=> {
                if (err) {
                    return next(err);
                }
                res.send("座位可用");
            });
        }
    })
});
module.exports = router;