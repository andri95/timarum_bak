import {connect, Document, Schema, model, Types} from "mongoose";
//import { URI } from './constants/apiConstants';
import { ObjectId } from 'mongodb';

export type watchInterface = Document & {
    _id: ObjectId;
    maker: string;
    year: string;
    model: string;
    measurements: Types.Array<string>;
    serviced: boolean;
    description: string;
    images: Types.Array<string>;
};

export const watchSchema: Schema = new Schema({
    _id: {type: String, required: true},
    maker: {type: String, required: true},
    year: {type: String, required: true},
    model: {type: String, required: true},
    measurements: {type: String, required: true},
    serviced: {type: String, required: true},
    description: {type: String, required: true},
    images: {type: String, required: true}
});

const Watch = model<watchInterface>('Watch', watchSchema);
export default Watch;