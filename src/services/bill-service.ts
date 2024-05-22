import { Page } from 'objection';
import { PageRequest } from '../dto/request/page-request';
import { Validation } from '../validations';
import { PageValidation } from '../validations/page-validation';
import { ResponseError } from '../handlers/response-error';
import { CreateBillRequest } from '../dto/request/bill-request';
import { BillResponse, toBillResponse } from '../dto/response/bill-response';
import { BillValidation } from '../validations/bill-validation';
import { BillModel } from '../models/bill-model';
import { EnumStatusBill } from '../enums/status-bill-enum';

export class BillService {
  public static async create(req: CreateBillRequest): Promise<BillResponse> {
    const billRequest = Validation.validate(BillValidation.CREATE, req);
    //TODO: Implement create bill
    const bill = await BillModel.query().insert(billRequest);
    return toBillResponse(bill);
  }

  public static async findAll(req: PageRequest): Promise<Page<BillModel>> {
    const request = Validation.validate(PageValidation.PAGE, req);
    const bills = await BillModel.query()
      .page(request.page, request.size)
      .withGraphFetched('billType')
      .withGraphFetched('user');

    if (bills.results.length === 0) {
      throw new ResponseError(404, 'Bill types not found');
    }
    return bills;
  }

  public static async findById(id: number): Promise<BillResponse> {
    const bill = await BillModel.query()
      .findById(id)
      .withGraphFetched('billType')
      .withGraphFetched('user')
      .throwIfNotFound();
    return toBillResponse(bill);
  }

  public static async findByUserId(
    req: PageRequest,
    userId: number
  ): Promise<Page<BillModel>> {
    const request = Validation.validate(PageValidation.PAGE, req);
    const cars = await BillModel.query()
      .where('user_id', userId)
      .page(request.page, request.size)
      .withGraphFetched('billType');

    if (cars.results.length === 0) {
      throw new ResponseError(404, 'Bill types not found');
    }
    return cars;
  }

  public static async updateStatus(id: number): Promise<BillResponse> {
    const bill = await BillModel.query().findById(id).throwIfNotFound();
    if (bill.status === 'paid') {
      throw new ResponseError(400, 'Bill already paid');
    }
    bill.status = EnumStatusBill.PAID;
    await BillModel.query().updateAndFetchById(id, bill);
    return toBillResponse(bill);
  }
}
