import { z } from 'zod';

export const laboratoryAccessSchema = z.object({
  accessCode: z.string().min(1, 'Campo obrigatório'),
});

export type LaboratoryAccessSchema = z.infer<typeof laboratoryAccessSchema>;
