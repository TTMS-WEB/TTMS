import express from 'express';
import Studios from '../models/Studios';
import Seat from '../models/Seat';

const router = express.Router();

router.get('/allStudios',(req,res,next)=>{
    Studios.find({},(err,data)=>{
        if(req.headers.cookie){
            res.send(data);
        }
        else {
            res.redirect(302,'/');
        }
    })
});

router.get('/search/studio/:id',(req,res,next)=>{
    let id = req.params.id;
    Studios.find({id:id},(err,data)=>{
        if(err){
            next(err);
        }
        res.send(data);
    })
});

router.post('/addStudio',(req,res,next)=>{
    let studio = new Studios(req.body);
    studio.save((err,data)=>{
        if(err){
            return next(err);
        }
        let seatArray = [];
        let row = data.row;
        let col = data.col;

        for (let i = 0; i < row * col; i++) {
            seatArray.push({status: 0});
        }
        let seat = new Seat({
            studioId: data.id,
            seatArray
        });
        seat.save((err, doc1)=> {
            if (err) {
                return next(err);
            }
            else {
                res.send("succeed");
            }
        });
    })
});

router.delete('/delete/studio/:id', (req, res)=> {
    Studios.findOneAndRemove({id: req.params.id}, (err, data)=> {
        if (err) {
            console.log(err.message);
        }
        res.send("succeed");
    });
});
router.post('/modifyStudio',(req,res,next)=>{
    let studio = req.body;
    let id = Number(studio.id);
    Studios.update({id:id},
        {
            'studioName':studio.studioName ,
            'studioInfo': studio.studioInfo,
            'col': studio.col,
            'row': studio.row
        },
        (err)=>{
        if(err){
            return next(err);
        }
        else{
            res.send("succeed");
        }
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
