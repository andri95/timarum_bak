import {connect, Document, Schema, model, Types} from "mongoose";
//import { URI } from './constants/apiConstants';
import { ObjectId } from 'mongodb';
import Maker from "./maker";

export type watchInterface = Document & {
    _id: ObjectId;
    maker: string;
    year: string;
    model: string;
    measurements: Types.Array<string>;
    serviced: boolean;
    description: string;
    images: Types.Array<string>;
    price: number;
};

export const watchSchema: Schema = new Schema({
    _id: {type: String, required: true},
    maker: {type: ObjectId, ref: Maker, required: true},
    year: {type: String, required: true},
    model: {type: String, required: true},
    measurements: [{type: String, required: true}],
    serviced: {type: Boolean, required: true},
    description: {type: String, required: true},
    images: [{type: String, required: true}],
    price: {type: Number, required: true}
});

const Watch = model<watchInterface>('watches', watchSchema);
export default Watch;