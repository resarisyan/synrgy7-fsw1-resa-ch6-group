export interface CreateBillTypeRequest {
  name: string;
  price: number;
}

export interface UpdateBillTypeRequest {
  name?: string;
  price?: number;
}
