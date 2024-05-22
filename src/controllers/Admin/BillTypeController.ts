import { Request, Response, NextFunction } from 'express';
import { PageRequest } from '../../dto/request/page-request';
import { BillTypeService } from '../../services/bill-type-service';
import { CreateBillTypeRequest } from '../../dto/request/bill-type-request';

export class BillTypeController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const request = {
        page: Number(req.query.page) || 0,
        size: Number(req.query.size) || 10,
      } as PageRequest;

      const billTypes = await BillTypeService.findAll(request);
      return res.json({
        status: 'success',
        message: 'Bill types retrieved successfully',
        data: billTypes,
      });
    } catch (err) {
      next(err);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let request: CreateBillTypeRequest = req.body as CreateBillTypeRequest;
      const billType = await BillTypeService.create(request);
      return res.json({
        status: 'success',
        message: 'Bill type created successfully',
        data: billType,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const billType = await BillTypeService.findById(id);
      return res.json({
        status: 'success',
        message: 'Bill type retrieved successfully',
        data: billType,
      });
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const request: CreateBillTypeRequest = req.body as CreateBillTypeRequest;
      const billType = await BillTypeService.update(id, request);
      return res.json({
        status: 'success',
        message: 'Bill type updated successfully',
        data: billType,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await BillTypeService.delete(id);
      return res.json({
        status: 'success',
        message: 'Bill type deleted successfully',
      });
    } catch (err) {
      next(err);
    }
  }
}
