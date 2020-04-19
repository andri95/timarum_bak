import {connect, Document, Schema, model} from "mongoose";
//import { URI } from './constants/apiConstants';
import { ObjectId } from 'mongodb';

export type makerInterface = Document & {
    _id: ObjectId;
    name: string;
    country: string;
    description: string;
};

export const makerSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    country: {type: String, required: true},
    description: {type: String, required: true}
});

const Maker = model<makerInterface>('Maker', makerSchema);
export default Maker;
