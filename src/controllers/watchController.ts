import {Request, Response, NextFunction} from 'express';

export let allWatches = (req: Request, res: Response) => {
    res.json('Send all watches');
};

export let singleWatch = (req: Request, res: Response) => {
    res.json('Send single watch');
};

export let watchesByMaker = (req: Request, res: Response) => {
    res.json('Send all watches by specific maker');
};
