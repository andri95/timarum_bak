export const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 3000
export const apiPath: string = '/api/';
export const version: string = 'v1';
export const URI: string = 'mongodb+srv://andrifannarp:<password>@cluster0-3t3xi.mongodb.net/timarum?retryWrites=true&w=majority';
export const allowedOrigins: Array<string> = ['http://localhost:3000', 'http://www.timarum.is'];
