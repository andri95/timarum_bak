import { Request, Response, NextFunction } from 'express';
import Maker, { makerInterface } from '../maker';
import { ObjectId } from 'mongodb';

// Adds _id to request
let addId = (body: object): object => {
    let id: object = {"_id": new ObjectId()};
    let completeObj: object = Object.assign(id, body);
    return completeObj;
};

// Returns all makers
export let allMakers = (req: Request, res: Response) => {
    Maker.find({}, (err: any, result: Array<Object>) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Returns single maker
export let singleMaker = (req: Request, res: Response) => {
    Maker.findById({_id: req.params.makerId}, (err: any, result: Object) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Adds new maker
export let addMaker = (req: Request, res: Response) => {
    let newMaker: makerInterface = new Maker(addId(req.body));
    newMaker.save((err: any) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newMaker);
        }
    });
};

// Updates maker
export let updateMaker = (req: Request, res: Response) => {
    Maker.findOneAndUpdate({_id: req.params.makerId}, {$set: req.body}, {new: true}, (err: any, result: any) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Deletes maker
export let deleteMaker = (req: Request, res: Response) => {
    Maker.findOneAndDelete({_id: req.params.makerId}, (err: any) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json('Success!');
        }
    });
};