import { AxiosError } from 'axios';
import { api } from '../../api/apiConfig';
import { Chemical, GetAllChemical, GetOneChemical } from './chemicalsTypes';

export async function getList(search: string) {
  const response = await api.get<GetAllChemical[]>('/input', {
    params: {
      search,
    },
  });

  return response.data;
}

export async function getOne(id: string) {
  try {
    const response = await api.get<GetOneChemical>(`/input/${id}`, {});

    return response.data;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;

    throw new Error(
      _error.response?.data.message || 'Ocorreu um erro ao buscar o insumo.'
    );
  }
}

export async function create(data: Chemical): Promise<void> {
  try {
    await api.post('/input', data);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;

    throw new Error(
      _error.response?.data.message || 'Ocorreu um erro ao cadastrar o insumo.'
    );
  }
}

export async function edit(id: string, data: Chemical): Promise<void> {
  try {
    return await api.put(`/input/${id}`, data);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message || 'Ocorreu um erro ao editar o insumo.'
    );
  }
}

export async function remove(id: string): Promise<void> {
  try {
    return await api.delete(`/input/${id}`);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message || 'Ocorreu um erro ao excluir o insumo'
    );
  }
}

export const chemicalsService = {
  getList,
  getOne,
  create,
  edit,
  remove,
};
