import { AppTabBottomTabParamList } from './tab.routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
  }
> = {
  ChemicalsScreen: {
    label: 'Insumos',
  },
  RegisterChemicalsScreen: {
    label: 'Novo',
  },
  ProfileScreen: {
    label: 'Perfil',
  },
};
