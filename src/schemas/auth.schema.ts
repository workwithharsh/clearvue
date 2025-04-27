import { z } from 'zod';

// Sign Up schema
export const signUpSchema = z.object({
  firstName: z.string().trim().toLowerCase().min(1, 'First name is required'),
  lastName: z.string().trim().toLowerCase().min(1, 'Last name is required'),
  email: z.string().trim().toLowerCase().email('Invalid email format'),
  phone: z.string().trim().length(10, 'Invalid phone number'),
  address: z.object({
    street: z.string(),
    city: z.string().trim().toLowerCase(),
    state: z.string().trim().toLowerCase(),
    country: z.string().trim().toLowerCase(),
    pinCode: z.string().trim().length(6, 'Invalid pin code format'),
  }),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  avatar: z.string().url('Avatar must be a valid URL'),
  role: z.enum(['user', 'admin']),
  favorites: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId format')),
});

// Sign In schema
export const signInSchema = z.object({
  email: z.string().trim().toLowerCase().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});
