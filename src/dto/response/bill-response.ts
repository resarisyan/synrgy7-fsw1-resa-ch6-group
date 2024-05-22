import { BillModel } from '../../models/bill-model';
import { BillTypeModel } from '../../models/bill-type-model';
import { UserModel } from '../../models/user-model';

export interface BillResponse {
  id: number;
  billTypeId: number;
  total_amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  user: UserModel;
  billType: BillTypeModel;
}

export function toBillResponse(bill: BillModel): BillResponse {
  return {
    id: bill.id,
    billTypeId: bill.bill_type_id,
    total_amount: bill.total_amount,
    status: bill.status,
    user: bill.user,
    billType: bill.billType,
    createdAt: bill.created_at,
    updatedAt: bill.updated_at,
  };
}
