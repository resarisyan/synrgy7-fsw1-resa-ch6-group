import { Page } from 'objection';
import { CreateBillTypeRequest } from '../dto/request/bill-type-request';
import { PageRequest } from '../dto/request/page-request';
import {
  BillTypeResponse,
  toBillTypeResponse,
} from '../dto/response/bill-type-response';
import { BillTypeModel } from '../models/bill-type-model';
import { Validation } from '../validations';
import { BillTypeValidation } from '../validations/bill-type-validation';
import { PageValidation } from '../validations/page-validation';
import { ResponseError } from '../handlers/response-error';

export class BillTypeService {
  public static async create(
    req: CreateBillTypeRequest
  ): Promise<BillTypeResponse> {
    const billTypeRequest = Validation.validate(BillTypeValidation.CREATE, req);
    const billType = await BillTypeModel.query().insert(billTypeRequest);
    return toBillTypeResponse(billType);
  }

  public static async findAll(req: PageRequest): Promise<Page<BillTypeModel>> {
    const request = Validation.validate(PageValidation.PAGE, req);
    const billTypes = await BillTypeModel.query().page(
      request.page,
      request.size
    );
    if (billTypes.results.length === 0) {
      throw new ResponseError(404, 'Bill types not found');
    }
    return billTypes;
  }

  public static async findById(id: number): Promise<BillTypeResponse> {
    const billType = await BillTypeModel.query().findById(id).throwIfNotFound();
    return toBillTypeResponse(billType);
  }

  public static async update(
    id: number,
    req: CreateBillTypeRequest
  ): Promise<BillTypeResponse> {
    const billTypeRequest = Validation.validate(BillTypeValidation.UPDATE, req);
    const billType = await BillTypeModel.query()
      .patchAndFetchById(id, billTypeRequest)
      .throwIfNotFound();
    return toBillTypeResponse(billType);
  }

  public static async delete(id: number): Promise<void> {
    await BillTypeModel.query().deleteById(id);
  }
}
