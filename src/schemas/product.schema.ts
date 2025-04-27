import { z } from 'zod';

export const addProductSchema = z.object({
  name: z.string().trim(),
  type: z.string().trim().toLowerCase(),
  size: z.enum(['small', 'medium', 'large', 'extra-large']),
  color: z.string().trim().toLowerCase(),
  material: z.string().trim().toLowerCase(),
  gender: z.enum(['male', 'female', 'unisex']),
  description: z.string(),
  variants: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/)),
  reviewCount: z.number().default(0),
  avgRating: z.number().default(0),
  originalPrice: z.number(),
  sellingPrice: z.number(),
  regularDiscount: z.number().default(0),
  images: z.array(z.string().url()),
  isAvailable: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
});
