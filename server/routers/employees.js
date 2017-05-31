import express from 'express';
import UserInfo from '../models/UserInfo';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cookieParser());

router.get('/allEmployees',(req,res,next)=>{
    UserInfo.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

module.exports = router;