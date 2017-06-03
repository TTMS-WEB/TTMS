import mongoose from 'mongoose';
import rawData from './raw-date/raw-data';
import UserInfo from '../models/UserInfo';
import Seat from '../models/Seat';
import PlayInfo from '../models/playInfo';
import Studios from '../models/Studios';
import Ticket from '../models/Ticket';
import Schedule from '../models/Schedule';

mongoose.Promise = require('bluebird');

const modelsMap = {
    UserInfo,
    Studios,
    PlayInfo,
    Seat,
    Ticket,
    Schedule
};

let docs = Object.keys(rawData);

console.log(docs);


mongoose.connect('mongodb://localhost:27017/ttms');

Object.keys(rawData).forEach(v => {
    modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
            docs = docs.filter(doc => doc !== v);
            console.log(`The data of ${v} created`);
            if (docs.length === 0) {
                console.log(`All data refreshed`);
                process.exit(0);
            }
        });
    });
});


