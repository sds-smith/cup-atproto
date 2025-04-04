import http from 'http';
import { env } from './lib/env';
import app from './app';
import { createDb, migrateToLatest } from './db';
import { createClient } from './auth/client';

const { NODE_ENV, HOST, PORT, DB_PATH } = env

const httpServer = http.createServer(app);

async function startServer() {
    const db = createDb(DB_PATH);
    await migrateToLatest(db);
    console.log('Database created')

    const oauthClient = await createClient(db);
    
    httpServer.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

startServer();