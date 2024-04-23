/**
 * Root Routes
 * Redirections to different routes
 */
import express, { Request, Response } from 'express';
import helloRoute from './HelloRoute';
import { LogInfo } from '../utils/logger';

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('[GET] http://localhost:8000/api/');
    res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose. ');
})

// Redirect to Routers && Controllers
server.use('/', rootRouter); // http://localhost:8000/api
server.use('/hello', helloRoute); // http://localhost:8000/api/hello => HelloRoute
// Add more routes to the app

export default server;

