import express from 'express';
import { authMiddleware } from '../../middlewares/auth-middleware';
import { CheckRole } from '../../middlewares/check-role-middleware';
import { BillController } from '../../controllers/Admin/BillController';
export const adminBillRouter = express.Router();

adminBillRouter.use(authMiddleware);
adminBillRouter.use(CheckRole.isAdmin);
adminBillRouter.get('/', BillController.getAll);
adminBillRouter.get('/:id', BillController.getById);
adminBillRouter.post('/', BillController.create);
adminBillRouter.put('/status/:id', BillController.updateStatus);
