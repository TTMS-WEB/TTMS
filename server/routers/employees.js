import express from 'express';
import UserInfo from '../models/UserInfo';

const router = express.Router();

router.get('/allEmployees',(req,res,next)=>{
    UserInfo.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

router.get('/legal-username', (req, res, next)=> {
    if (req.cookies.username) {
        res.send(req.cookies.username);
    } else {
        res.status(403).send('');
    }
});

router.get('/searchEmployee/:employeeName',(req,res,next)=>{
    let employeeName = req.params.employeeName;
    UserInfo.find({username:employeeName},(err,data)=>{
        if(err){
            next(err)
        }
        res.send(data);
    })
});

router.delete('/deleteEmployee/:name', (req, res)=> {
    UserInfo.findOneAndRemove({username: req.params.name}, (err, data)=> {
        if (err) {
            console.log(err.message);
        }
        res.send("succeed");
    });
});


module.exports = router;