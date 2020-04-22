import express, {Application, Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import * as orderController from './controllers/orderController';
import * as watchController from './controllers/watchController';
import * as makerController from './controllers/makerController';
import { PORT, apiPath, version, URI, allowedOrigins } from './constants/apiConstants';
import mongoose, { connect } from 'mongoose';
mongoose.set('debug', true);

const app: Application = express();
app.use(json());
app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            let msg: string = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// MongoDB connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
    if (err){
        console.log(err.message);
    } else {
        console.log('Connected!');

    }
});

// GET requests
app.get(`${apiPath}${version}/makers/watches/:watchId`, watchController.singleWatch);
app.get(`${apiPath}${version}/makers/watches`, watchController.allWatches);
app.get(`${apiPath}${version}/makers/:makerId`, makerController.singleMaker);
app.get(`${apiPath}${version}/makers`, makerController.allMakers);
app.get(`${apiPath}${version}/makers/:makerId/watches`, watchController.watchesByMaker);
app.get(`${apiPath}${version}/orders`, orderController.allOrders);
app.get(`${apiPath}${version}/orders/:orderId`, orderController.singleOrder);

// POST requests
app.post(`${apiPath}${version}/makers`, makerController.addMaker);
app.post(`${apiPath}${version}/makers/watches`, watchController.addWatch);
//app.post(`${apiPath}${version}/orders`, orderController.addOrder);

// PUT requests
app.put(`${apiPath}${version}/makers/:makerId`, makerController.updateMaker);
app.put(`${apiPath}${version}/makers/watches/:watchId`, watchController.updateWatch);
//app.put(`${apiPath}${version}/orders`, orderController.updateOrder);

// DELETE requests
app.delete(`${apiPath}${version}/makers/:makerId`, makerController.deleteMaker);
app.delete(`${apiPath}${version}/makers/watches/:watchId`, watchController.deleteWatch);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));