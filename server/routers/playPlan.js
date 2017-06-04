import express from "express";
import PlayPlan from "../models/playPlan";
import PlayInfo from "../models/playInfo";
import Studios from "../models/Studios";
const ObjectID = require('mongodb').ObjectID;


const router = express.Router();

router.post('/showPlan', (req, res, next)=> {
    const currentDate = new Date(GetDateStr(0));

    PlayPlan.find({'date':{$gte: currentDate}}, (err, plans)=> {
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
                            planId: plan._id,
                            planName: plan.planName,
                            planStudio: plan.planStudio,
                            date: plan.date,
                            time: plan.time,
                            planLong: playdata.playTime,
                            planPrice: playdata.playPrice
                        };
                        planInfo.push(play);
                        if (planInfo.length === plans.length) {
                            planInfo.sort(compare('date', 'time'));

                            res.send({planInfo, plays, studios});
                        }
                    });
                });
            });
        });
    })
});

router.post('/addPlan', (req, res, next)=> {
    const playPlan = new PlayPlan(req.body.planInfo);
    PlayPlan.find({planStudio: playPlan.planStudio, date: new Date(playPlan.date), time: playPlan.time}, (err, data)=> {
        if (err) {
            next(err);
        }
        else {
            if (data.length === 0) {
                playPlan.save((err, result)=> {
                    if (err) {
                        next(err);
                    }
                    else {
                        res.send({addResult: true})
                    }
                })
            }
            else {
                res.send({addResult: false});
            }
        }
    });

});

router.post('/deletePlan', (req, res, next)=> {
    const deleteId = req.body.deleteInfo.id;
    PlayPlan.remove({_id: ObjectID(deleteId)}, (err, result)=> {
        if (err) {
            next(err);
        }
        res.send({deleteResult:true});
    })
});

router.post('/find', (req, res, next)=> {
    const date = new Date(req.body.findInfo.day);
    const planInfo = [];
    PlayPlan.find({date: date}, (err, plans)=> {
        plans.forEach((plan, index)=> {

            PlayInfo.findOne({playName: plan.planName}, {playPrice: 1, playTime: 1}, (err, playdata)=> {
                if (err) {
                    next(err);
                }
                let play = {
                    planId: plan._id,
                    planName: plan.planName,
                    planStudio: plan.planStudio,
                    date: plan.date,
                    time: plan.time,
                    planLong: playdata.playTime,
                    planPrice: playdata.playPrice
                };
                planInfo.push(play);
                if (planInfo.length === plans.length) {
                    planInfo.sort(compare('date', 'time'));

                    res.send({findResult: planInfo});
                }
            });

        })
    });
});


    router.post('/modifyPlan', (req, res, next)=> {
        const mdPlan = req.body.modifyInfo;
        const newPlanCheck = {
            planStudio: mdPlan.mdStudio,
            date: mdPlan.mddate,
            time: mdPlan.mdtime,
            _id: {$ne: ObjectID(mdPlan.planId)}
        };
        PlayPlan.find(newPlanCheck, (err, data)=> {

            if (err) {
                next(err);
            }
            else if (data.length === 0) {
                PlayPlan.update({_id: ObjectID(mdPlan.planId)}, {
                    planName: mdPlan.mdPlay,
                    planStudio: mdPlan.mdStudio,
                    date: mdPlan.mddate,
                    time: mdPlan.mdtime
                }, (err, data)=> {
                    if (err) {
                        next(err);
                    }
                    else {
                        res.send({modifyResult: true});
                    }
                })
            }
            else {
                res.send({modifyResult: false});
            }
        });
    });

    function compare(property1, property2) {
        return function (obj1, obj2) {
            var value1 = obj1[property1];
            var value2 = obj2[property1];
            var val1 = obj1[property2];
            var val2 = obj2[property2];
            if (value1 - value2 === 0) {
                return val1 - val2;
            }

            return value1 - value2;
        }
    }

    function GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
    }

    module.exports = router;
