import { BillTypeModel } from '../../models/bill-type-model';

export interface BillTypeResponse {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export function toBillTypeResponse(billType: BillTypeModel): BillTypeResponse {
  return {
    id: billType.id,
    name: billType.name,
    price: billType.price,
    createdAt: billType.created_at,
    updatedAt: billType.updated_at,
  };
}
