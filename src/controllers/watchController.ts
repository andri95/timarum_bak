import {Request, Response, NextFunction} from 'express';
import Watch, { watchInterface } from '../watch';
import { ObjectId } from 'mongodb';
import { RecordWithTtl } from 'dns';

// Adds _id to request
let addId = (body: object): object => {
    let id: object = {"_id": new ObjectId()};
    let completeObj: object = Object.assign(id, body);
    return completeObj;
};

// Returns all watches
export let allWatches = (req: Request, res: Response) => {
    Watch.find({}, (err: any, result: Array<Object>) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Returns single watch
export let singleWatch = (req: Request, res: Response) => {
    Watch.findById({_id: req.params.watchId}, (err: any, result: Object) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Returns all watches by single maker
export let watchesByMaker = (req: Request, res: Response) => {
    Watch.find({maker: req.params.makerId}, (err: any, result: Array<Object>) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Adds watch
export let addWatch = (req: Request, res: Response) => {
    let newWatch: watchInterface = new Watch(addId(req.body));
    newWatch.save((err: any) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newWatch);
        }
    });
};

// Updates watch
export let updateWatch = (req: Request, res: Response) => {
    Watch.findByIdAndUpdate({_id: req.params.watchId}, {$set: req.body}, {new: true}, (err: any, result: any) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Deletes watch
export let deleteWatch = (req: Request, res: Response) => {
    Watch.findOneAndDelete({_id: req.params.watchId}, (err: any) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json('Success!');
        }
    });
};
