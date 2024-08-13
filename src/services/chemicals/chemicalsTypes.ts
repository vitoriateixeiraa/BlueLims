export type GetAllChemical = {
  id: string;
  name: string;
};

export interface Chemical {
  name: string;
  observations: string;
  quantity: number;
  categories: string;
  subCategories: string;
  type: string;
  status: string;
  imageUrl?: string;
  laboratoryId: string;
}

export interface GetOneChemical {
  name: string;
  observations: string;
  quantity: number;
  categories: string;
  subCategories: string;
  type: string;
  status: string;
  imageUrl?: string;
  laboratoryId: string;
  laboratory: {
    id: string;
    name: string;
  }
}
