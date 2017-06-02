import express from 'express';
let router = express.Router();

import Seat from '../models/Seat';

router.get('/sale/:studioId', (req, res, next)=> {
    Seat.findOne({studioId: req.params.studioId}, (err, data)=> {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});

module.exports = router;