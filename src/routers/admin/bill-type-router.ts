import express from 'express';
import { authMiddleware } from '../../middlewares/auth-middleware';
import { CheckRole } from '../../middlewares/check-role-middleware';
import { BillTypeController } from '../../controllers/Admin/BillTypeController';
export const adminBillTypeRouter = express.Router();

adminBillTypeRouter.use(authMiddleware);
adminBillTypeRouter.use(CheckRole.isAdmin);
adminBillTypeRouter.get('/', BillTypeController.getAll);
adminBillTypeRouter.get('/:id', BillTypeController.getById);
adminBillTypeRouter.post('/', BillTypeController.create);
adminBillTypeRouter.put('/:id', BillTypeController.update);
adminBillTypeRouter.delete('/:id', BillTypeController.delete);
