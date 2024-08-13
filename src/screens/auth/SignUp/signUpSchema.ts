import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1, 'Campo obrigatório'),
    email: z.string().email('Email inválido'),
    role: z.enum(['USER', 'ADMIN']),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
    confirm_password: z
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não estão iguais',
    path: ['confirm_password']
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
