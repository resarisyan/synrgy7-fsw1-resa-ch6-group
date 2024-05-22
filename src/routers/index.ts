import express from 'express';
import { errorMiddleware } from '../middlewares/error-middleware';
import { authRouter } from './auth-router';
import { adminBillTypeRouter } from './admin/bill-type-router';
import { adminBillRouter } from './admin/bill-router';
import { customerBillRouter } from './customer/bill-router';
export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/admin/bill-type', adminBillTypeRouter);
apiRouter.use('/admin/bill', adminBillRouter);
apiRouter.use('/customer/bill', customerBillRouter);
apiRouter.use(errorMiddleware);
