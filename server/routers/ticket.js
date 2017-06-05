import express from 'express';
const router = express.Router();

import Schedule from '../models/Schedule';

router.get('/getTicketInfo', (req, res, err)=> {
    Schedule.find({}, (err, data)=> {
        if (err) {
            return next(err)
        }
        res.send(data);
    })
});

module.exports = router;