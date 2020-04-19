import express, {Application, Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
//import cors from 'cors';
import * as orderController from './controllers/orderController';
import * as watchController from './controllers/watchController';
import * as makerController from './controllers/makerController';
import { PORT, apiPath, version} from './constants/apiConstants';

const app: Application = express();
app.use(json());

// GET requests
app.get(`${apiPath}${version}/makers`, makerController.allMakers);
app.get(`${apiPath}${version}/makers/:makerId`, makerController.singleMaker);
app.get(`${apiPath}${version}/watches`, watchController.allWatches);
app.get(`${apiPath}${version}/watches/:watchId`, watchController.singleWatch);
app.get(`${apiPath}${version}/watches/makers/makerId`, watchController.watchesByMaker);
app.get(`${apiPath}${version}/orders`, orderController.allOrders);
app.get(`${apiPath}${version}/orders/:orderId`, orderController.singleOrder);

// POST requests
app.post(`${apiPath}${version}/makers`, makerController.addMaker);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));