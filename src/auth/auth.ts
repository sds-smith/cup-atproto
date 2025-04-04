import { Router } from 'express';
import atProtoAuthRouter from './atproto.auth';

const authRouter = Router();

authRouter.use('/login', atProtoAuthRouter)

export default authRouter;