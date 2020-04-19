import { Request, Response, NextFunction } from 'express';
import { client } from '../server';
import Maker from '../maker';


let test: Array<Object> = [{_id: 1, name: 'Vostok', country: 'Soviet Union'}, {_id: 2, name: 'Slava', country: 'Soviet Union'}];
let getMakers = () => {
    return test;
};

export let addMaker = (req: Request, res: Response) => {
    let newMaker = new Maker(req.body);
    newMaker.save((err: any) => {
        if (err) {
            res.json(err);
        } else {
            res.send(newMaker);
        }
    });
};

export let allMakers = (req: Request, res: Response) => {
    let makers: Array<Object> = getMakers();
    res.json(makers);
};

export let singleMaker = (req: Request, res: Response) => {
    res.json('Returns single maker');
};