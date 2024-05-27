import { EnumStatusBill } from "../../enums/status-bill-enum";

export interface CreateBillRequest {
  user_id: number;
  bill_type_id: number;
  status: EnumStatusBill;
  quanity: number;
}

export interface UpdateBillRequest {
  status?: EnumStatusBill;
}
