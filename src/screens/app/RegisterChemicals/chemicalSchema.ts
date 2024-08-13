import { z } from 'zod';

export const chemicalSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  observations: z.string(),
  quantity: z.coerce.number().min(1, 'Campo obrigatório').default(1),
  categories: z.string().min(1, 'Campo obrigatório'),
  subCategories: z.string().min(1, 'Campo obrigatório'),
  type: z.string().min(1, 'Campo obrigatório'),
  status: z.string().min(1, 'Campo obrigatório'),
  laboratoryId: z.string().min(1, 'Campo obrigatório'),
});

export type ChemicalSchema = z.infer<typeof chemicalSchema>;
