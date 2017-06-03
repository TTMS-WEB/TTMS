import express from 'express';
const router = express.Router();

import PlayInfo from '../models/playInfo';
import PlayPlan from '../models/playPlan';
import Studio from '../models/Studios';
import Seat from '../models/Seat';
import Schedule from '../models/Schedule';

router.get('/schedule', (req, res, next)=> {
    PlayPlan.find({}, (err, data)=> {
        if (err) {
            return next(err);
        }

        let length = 0;
        let schedule;
        data.map((ele)=> {
            PlayInfo.findOne({playName: ele.planName}, (err, doc)=> {
                if (err) {
                    return next(err);
                }
                Seat.findOne({studioId: ele.planStudio}, (err, doc1)=> {
                    let badSeatStatusArray = [];
                    if (err) {
                        return next(err);
                    }
                    for (let i = 0; i < doc1.seatArray.length; i++) {
                        if (doc1.seatArray[i].status == -1) {
                            badSeatStatusArray.push(i);
                        }
                    }
                    Studio.findOne({id: ele.planStudio}, (err, doc2)=> {
                        if (err) {
                            return next(err);
                        }

                        let row = doc2.row;
                        let col = doc2.col;
                        let TicketArray = [];

                        for (let i = 0; i < row * col; i++) {
                            if (badSeatStatusArray.includes(i)) {
                                TicketArray.push({status: -1});
                            }
                            else {
                                TicketArray.push({status: 0});
                            }
                        }

                        schedule = new Schedule({
                            ScheduleName: ele.planName,
                            ScheduleStudio: ele.planStudio,
                            ScheduleDate: ele.date,
                            ScheduleTime: ele.time,
                            ScheduleActor:doc.playActor,
                            SchedulePrice:doc.playPrice,
                            TicketArray
                        });

                        Schedule.findOne({ScheduleName:ele.planName,ScheduleStudio: ele.planStudio,ScheduleDate: ele.date},
                            (err, doc3)=> {
                            if (err) {
                                return next(err);
                            }
                            if (doc3 == null) {
                                schedule.save((err, doc4)=>     {
                                    if (err) {
                                        return next(err);
                                    }
                                    length++;
                                    if (data.length == length) {
                                        Schedule.find((err,doc5)=>{
                                            res.send(doc5);
                                        });
                                    }
                                });
                            }
                            else {
                                length++;
                                if (data.length == length) {
                                    Schedule.find((err,doc5)=>{
                                        res.send(doc5);
                                    });
                                }
                            }

                        });

                    });
                });
            });
        });
    })
});

module.exports = router;