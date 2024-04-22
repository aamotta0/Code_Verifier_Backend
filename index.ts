// Enviroment variables
import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

// Configuration the .env file
dotenv.config();

const PORT = process.env.PORT || 8000;

// Execute the server
server.listen(PORT, () => {
    LogSuccess(`[SERVER ON]: Running in http://localhost:${PORT}/api`)
});

// Control SERVER ERROR
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`)
});
