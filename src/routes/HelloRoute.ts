import express, { Request, Response } from 'express';
import { HelloController } from '../controller/HelloController';
import { LogInfo } from '@/utils/logger';

// Route from express 
let helloRoute = express.Router();

// http://localhost:8000/api/hello?name=Rimuro/
helloRoute.route('/')
    // [GET] => http://localhost:8000/api/hello?name=Rimuro/
    .get(async (req: Request, res: Response) => {
        // Obtain a query parameter
        let name: any = req?.query?.name;
        LogInfo(`Query Parameter: ${name}`);
        // Controller Instance to execute method
        const controller: HelloController = new HelloController();
        // Obtain response
        const response = await controller.getMessage(name);
        // Send to the client the response 
        return res.send(response);
    })

    
export default helloRoute