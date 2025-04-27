import { z } from 'zod';

export const AddProductVariantSchema = z.object({
  name: z.string().trim().toLowerCase(),
  attribute: z.string().trim().toLowerCase(),
  variants: z.array(z.string().toLowerCase()),
  products: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/)),
});
