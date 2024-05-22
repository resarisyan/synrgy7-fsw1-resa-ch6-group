import express from 'express';
import { authMiddleware } from '../../middlewares/auth-middleware';
import { CheckRole } from '../../middlewares/check-role-middleware';
import { BillController } from '../../controllers/Customer/BillController';
export const customerBillRouter = express.Router();

customerBillRouter.use(authMiddleware);
customerBillRouter.use(CheckRole.isCustomer);
customerBillRouter.get('/', BillController.getAll);
