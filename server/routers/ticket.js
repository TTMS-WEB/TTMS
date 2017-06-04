import express from 'express';
const router = express.Router();

import Schedule from '../models/Schedule';

router.get('/getTicketInfo', (req, res, err)=> {
    Schedule.find({}, (err, data)=> {
        if (err) {
            return next(err)
        }
        /*let dataStatusArray = data.map((ele)=> {
            return ele.TicketArray.filter((data) =>data.status == 1);
        });
        let dataLengthArray = dataStatusArray.map((ele)=> {
            return ele.length;
        });
        console.log(dataLengthArray);*/
        res.send(data);
    })
});

module.exports = router;