import express from 'express';
import Studios from '../models/Studios';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cookieParser());

router.get('/studios',(req,res,next)=>{
    Studios.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

module.exports = router;
