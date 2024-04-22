import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load env vars
dotenv.config();

// Init app
const app: Express = express();
const PORT: number | string = process.env.PORT || 8000;

// Define the second route of hello
app.get('/hello', (req: Request, res: Response) => {
    res.send('Welcome to GET Route: ¡Hello World! 🫡');
})

// Execute APP and listen Requests on PORT
app.listen(PORT, () => console.log(`EXPRESS SERVER: Running at http://localhost:${PORT}`));
