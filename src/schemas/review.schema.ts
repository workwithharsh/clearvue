import { z } from 'zod';

export const AddReviewSchema = z.object({
  user: z.string().regex(/^[0-9a-fA-F]{24}$/),
  product: z.string().regex(/^[0-9a-fA-F]{24}$/),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  isFeatured: z.boolean().default(false),
});
