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
                            date: plan.date,
                            time: plan.time,
                            planLong: playdata.playTime,
                            planPrice: playdata.playPrice
                        };
                        planInfo.push(play);
                        if (planInfo.length === plans.length) {
                            planInfo.sort(compare('date','time'));
                            res.send({planInfo, plays, studios});
                        }
                    });
                });
            });
        });
    })
});

function compare(property1,property2) {
    return function (obj1, obj2) {
        var value1 = obj1[property1];
        var value2 = obj2[property1];
        var val1 = obj1[property2];
        var val2 = obj2[property2];
        if(value1 - value2 === 0){
            return val1 - val2;
        }

        return value1 - value2;
    }
}
module.exports = router;