import cors from 'cors';
import path from 'path';
import express, { type Express } from 'express';

const app: Express = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (_req, res) => {
    res.status(200).json('Hello World')
    return
})

export default app;