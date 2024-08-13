import { z } from "zod";

export const changePasswordSchema = z
  .object({
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
    confirm_password: z
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não estão iguais',
    path: ['confirm_password']
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;