const CATEGORIES = [
  { label: 'Reagentes', value: 'Reagentes' },
  { label: 'Materiais', value: 'Materiais' },
  { label: 'Padrões', value: 'Padrões' },
  { label: 'Segurança', value: 'Segurança' },
  { label: 'Análise', value: 'Análise' },
  { label: 'Cultura', value: 'Cultura' },
];

const SUB_CATEGORIES = [
  { label: 'Substâncias', value: 'Substâncias' },
  { label: 'Equipamento', value: 'Equipamento' },
  { label: 'Referência', value: 'Referência' },
  { label: 'Proteção', value: 'Proteção' },
  { label: 'Técnicas', value: 'Técnicas' },
  { label: 'Biológicos', value: 'Biológicos' },
];

const STATUS = [
  { label: 'Ativo', value: 'Ativo' },
  { label: 'Inativo', value: 'Inativo' },
];

const TYPES = [
  { label: 'Hidróxidos', value: 'Hidróxidos' },
  { label: 'Solventes', value: 'Solventes' },
  { label: 'Indicadores', value: 'Indicadores' },
  { label: 'Padrões', value: 'Padrões' },
  { label: 'Ácidos', value: 'Ácidos' },
  { label: 'Sais', value: 'Sais' },
  { label: 'Outros', value: 'Outros' },
];

export const options = {
  categories: CATEGORIES,
  types: TYPES,
  status: STATUS,
  subCategories: SUB_CATEGORIES,
};
