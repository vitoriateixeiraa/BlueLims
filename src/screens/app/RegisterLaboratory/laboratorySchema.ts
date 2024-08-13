import { z } from 'zod';

export const laboratorySchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  institution: z.string().min(1, 'Campo obrigatório'),
});

export type LaboratorySchema = z.infer<typeof laboratorySchema>;
