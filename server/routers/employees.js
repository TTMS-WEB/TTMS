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

module.exports = router;