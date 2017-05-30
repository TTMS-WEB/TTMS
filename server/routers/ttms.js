import express from 'express';
import UserInfo from '../models/UserInfo';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.post('/register', (req, res,next)=> {
    let userInfo = new UserInfo(req.body);
    userInfo.save((err, data)=> {
        if (err) {
            return next(err);
        }
        res.status(201).end();
    })
});

router.post('/isLegal', (req, res) => {
    const username = req.body.username;
    const psw = req.body.psw;
    UserInfo.findOne({username: username}, (err, data)=> {
        if (err) {
            return next(err);
        }
        if (data) {
            if (psw !== data.password) {
                res.send("密码错误，请重新登陆！");
            }
            else {
                res.cookie('username', username, {path: '/'});

                res.send("");
            }
        }
    });
});

router.get('/users/:username', (req, res, next)=> {
    let name = req.params.username;
    UserInfo.findOne({username: name}, (err, data)=> {
        if (err) {
            return next(err);
        }
        if (!data) {
            res.send("用户名不存在，请重新输入");
        } else {
            res.send(" ");
        }
    });
});

router.get('/userInfo', (req, res, next)=> {
    UserInfo.find({username: req.cookies.username}, (err, data)=> {
        if (err) {
            return next(err);
        }
        res.send(data);
    });
});

router.post('/exitUser', (req, res)=> {
    UserInfo.findOne({"username": req.body.username}, (err, data)=> {
        if (err) {
            console.log("数据库出错");
        }
        if (data) {
            res.send("用户名已被注册，请重新输入");
        }
        else {
            res.send("false");
        }
    })
});

router.get('/allEmployees',(req,res)=>{
    UserInfo.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        console.log(data);
        res.send(data);
    })
});