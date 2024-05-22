import { z, ZodType } from 'zod';

export class BillValidation {
  static readonly CREATE: ZodType = z.object({
    bill_type_id: z.number().int().positive(),
    user_id: z.number().int().positive(),
    quantity: z.number().int().positive(),
    status: z.enum(['paid', 'unpaid']),
  });
}
