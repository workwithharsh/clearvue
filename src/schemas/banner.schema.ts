import { z } from 'zod';

export const AddBannerSchema = z.object({
  headline: z.string().trim(),
  image: z.string().url(),
  description: z.string().trim(),
  ctaText: z.string().trim(),
  ctaLink: z
    .string()
    .regex(/^\/[a-zA-Z0-9-_]+(?:\?[a-zA-Z0-9-_=&]+)*$/)
    .trim(),
  type: z.string().trim().toLowerCase(),
  priorityOrder: z.number().min(1).max(10),
  isActive: z.boolean().default(true),
});
