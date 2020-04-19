import { URI } from './constants/apiConstants';
import { connect } from 'mongoose';
//import {MongoClient, Db} from 'mongodb';
//import { Maker, Watch, Database} from './models/models';

//export const connectDatabase = () => {
//    const client = MongoClient.connect(URI);
//};

export const client = connect(URI, (err: any) => {
    if (err){
        console.log(err.message);
    } else {
        console.log('Connected!');
    }
});
