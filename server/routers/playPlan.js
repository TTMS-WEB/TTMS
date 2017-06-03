import express from "express";
import PlayPlan from "../models/playPlan";
import PlayInfo from "../models/playInfo";
import Studios from "../models/Studios";


const router = express.Router();

router.post('/showPlan', (req, res, next)=> {

    PlayPlan.find({}, (err, plans)=> {
        const planInfo = [];
        if (err) {
            next(err);
        }
        PlayInfo.find({}, {playName: ''}, (err, plays)=> {

            if (err) {
                next(err);
            }
            Studios.find({}, {id: 1}, (err, studios)=> {
                if (err) {
                    next(err);
                }

                plans.forEach((plan, index)=> {

                    PlayInfo.findOne({playName: plan.planName}, {playPrice: 1, playTime: 1}, (err, playdata)=> {
                        if (err) {
                            next(err);
                        }
                        let play = {
                            planName: plan.planName,
                            planStudio: plan.planStudio,
                            time: plan.time,
                            planLong: playdata.playTime,
                            planPrice: playdata.playPrice
                        };
                        planInfo.push(play);
                        if (planInfo.length === plans.length) {
                            res.send({planInfo, plays, studios});
                        }
                    });
                });
            });
        });
    })
});

module.exports = router;