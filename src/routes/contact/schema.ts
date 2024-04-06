import { z } from 'zod';

export const formSchema = z.object({
	fullName: z
		.string()
		.min(2, { message: 'Numele trebuie sa fie mai lung de 2 caractere' })
		.max(50, { message: 'Numele trebuie sa fie mai scurt de 50 de caractere' }),
	company: z
		.string()
		.min(2, { message: 'Numele companiei este prea scurt, minim 2 caractere' })
		.max(50, { message: 'Numele companiei este prea lung, maxim 50 de caractere' })
		.optional(),
	email: z.string().email({ message: 'Email nu este valid' }),
	message: z
		.string()
		.min(5, { message: 'Mesajul este prea scurt, minim 5 caractere' })
		.max(500, { message: 'Mesajul este prea lung, maxim 500 de caractere' })
});

export type FormSchema = typeof formSchema;
