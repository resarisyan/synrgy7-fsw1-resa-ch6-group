import express from 'express';
import { authMiddleware } from '../middlewares/auth-middleware';
import { AuthController } from '../controllers/AuthController';
export const authRouter = express.Router();

authRouter.post('/login', AuthController.login);
authRouter.post('/register', AuthController.register);
authRouter.post('/logout', authMiddleware, AuthController.logout);
