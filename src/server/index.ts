import express, { Express, Request, Response } from 'express';
// swagger 
import swaggerUi from 'swagger-ui-express';

// Security
import cors from 'cors';
import helmet from 'helmet';

// Root Routes
import rootRoutes from '../routes';
import mongoose from 'mongoose';

// Init server
const server: Express = express();

// Swagger Config and route
server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
            explorer: true
        }
    })
)

// Define SERVER to use "/api" and use rootRoutes from "routes/index.ts" in routes
// FROM this point onover: http://localhost:8000/api/...
server.use('/api', rootRoutes);

// Start Server
server.use(express.static('public'));

// Moongose Connection
mongoose.connect('mongodb://localhost:27017/codeverification', {
}).then(() => {
    console.log('MongoDB Connected 🚀');
})

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