import {z} from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Campo obrigatório'),
});

export type SignInSchema = z.infer<typeof signInSchema>;