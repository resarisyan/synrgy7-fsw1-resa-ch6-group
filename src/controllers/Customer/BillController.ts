import { Response, NextFunction } from 'express';
import { BillService } from '../../services/bill-service';
import { PageRequest } from '../../dto/request/page-request';
import { UserRequest } from '../../dto/request/user-request';

export class BillController {
  static async getAll(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request = {
        page: Number(req.query.page) || 0,
        size: Number(req.query.size) || 10,
      } as PageRequest;
      const id = req.user?.id as number;
      const bills = await BillService.findByUserId(request, id);
      return res.json({
        status: 'success',
        message: 'Bills retrieved successfully',
        data: bills,
      });
    } catch (err) {
      next(err);
    }
  }
}
