import http from 'http';
import app from './app';

const PORT = process.env.PORT || 8080;

const httpServer = http.createServer(app);

async function startServer() {
    
    httpServer.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

startServer();