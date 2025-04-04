import { Router } from 'express';

const atProtoAuthRouter = Router();



atProtoAuthRouter.post('/', (_req, res) => {
    res.status(200).json('authRouter/login')
})

export default atProtoAuthRouter;