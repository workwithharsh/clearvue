import { z } from 'zod';

export const AddFlashSaleSchema = z.object({
  products: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/)),
  flashDiscount: z.number(),
  startDate: z.date(),
  endDate: z.date(),
  isActive: z.boolean().default(true),
});
