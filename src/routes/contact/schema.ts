import { z } from 'zod';

export const formSchema = z.object({
	fullName: z.string().min(2).max(50),
  company: z.string().min(2).max(50).optional(),
  email: z.string().email(),
  message: z.string().min(5).max(500),
});

export type FormSchema = typeof formSchema;
