import express from 'express';
const router = express.Router();

import PlayInfo from '../models/playInfo';
import PlayPlan from '../models/playPlan';
import Studio from '../models/Studios';
import Seat from '../models/Seat';
import Schedule from '../models/Schedule';

/*router.get('/schedule', (req, res, next)=> {
    PlayPlan.find({}, (err, data)=> {
        if (err) {
            return next(err);
        }
        console.log(data);

        let seatStatus;
        let TicketArray = [];

        data.map((ele)=> {
            Seat.find({studioId: ele.Id}, (err, doc)=> {
                if (err) {
                    return next(err);
                }
                seatStatus = doc.seatArray.filter((d)=>indexOf(d.status == -1));
            });

            Studio.find({id: ele.Id}, (err, doc1)=> {
                let row = doc1.row;
                let col = doc1.col;
                for (let n = 0; k < seatStatus.length; i++) {

                    for (let i = 0; i < row; i++) {
                        for (let j = 0; j < col; j++) {
                            if (n == i * row + j) {
                                TicketArray.push({status: -1});
                            }
                            else {
                                TicketArray.push({status: 0});
                            }
                        }
                    }
                }
            });

            let schedule =new Schedule({playPlanId:,ticketArray});
            schedule.save((err,doc2)=>{
                if (err) {
                    return next(err);
                }
            });
        });


    })
});*/
module.exports = {router};