import { Request, Response, NextFunction } from 'express';
import { BillService } from '../../services/bill-service';
import { CreateBillRequest } from '../../dto/request/bill-request';
import { PageRequest } from '../../dto/request/page-request';

export class BillController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let request: CreateBillRequest = req.body as CreateBillRequest;
      const bill = await BillService.create(request);
      return res.json({
        status: 'success',
        message: 'Bill created successfully',
        data: bill,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const request = {
        page: Number(req.query.page) || 0,
        size: Number(req.query.size) || 10,
      } as PageRequest;

      const bills = await BillService.findAll(request);
      return res.json({
        status: 'success',
        message: 'Bills retrieved successfully',
        data: bills,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const bill = await BillService.findById(id);
      return res.json({
        status: 'success',
        message: 'Bill retrieved successfully',
        data: bill,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const bill = await BillService.updateStatus(id);
      return res.json({
        status: 'success',
        message: 'Bill status updated successfully',
        data: bill,
      });
    } catch (err) {
      next(err);
    }
  }
}
