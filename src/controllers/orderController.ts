import {Request, Response, NextFunction} from 'express';

export let allOrders = (req: Request, res: Response) => {
    res.json('Send all orders');
};

export let singleOrder = (req: Request, res: Response) => {
    res.json('Send single order');
};