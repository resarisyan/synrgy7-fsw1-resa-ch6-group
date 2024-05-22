import { z, ZodType } from 'zod';

export class BillTypeValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(1).max(255),
    price: z.number().int().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    name: z.string().min(1).max(255).optional(),
    price: z.number().int().positive().optional(),
  });
}
