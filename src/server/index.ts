import express, { Express, Request, Response } from 'express';
// Security
import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

// Root Routes
import rootRoutes from '../routes';

// Init server
const server: Express = express();

// Define SERVER to use "/api" and use rootRoutes from "routes/index.ts" in routes
// FROM this point onover: http://localhost:8000/api/...
server.use('/api', rootRoutes);

// TODO: Moongose Connection

// Security Config
server.use(helmet());
server.use(cors());

// Content Type:
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));

// Redirections Config
// Http://localhost:8000/ => http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
})

// Start Server
export default server