import { AxiosError } from 'axios';
import { api } from '../../api/apiConfig';
import {
  AddStudentAPI,
  GetAllLaboratoriesDataAPI,
  Laboratory,
  LaboratoryDataAPI,
  LaboratoryParams,
} from './laboratoryTypes';

export async function list(
  search?: string
): Promise<GetAllLaboratoriesDataAPI[]> {
  try {
    const response = await api.get<GetAllLaboratoriesDataAPI[]>('/laboratory', {
      params: {
        search,
      },
    });

    return response.data;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message ||
        'Ocorreu ao buscar os laboratórios, por favor tente novamente.'
    );
  }
}

export async function getOne(id: string): Promise<Laboratory> {
  try {
    const response = await api.get<Laboratory>(`/laboratory/${id}`);

    return response.data;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message ||
        'Ocorreu ao buscar o laboratório, por favor tente novamente.'
    );
  }
}

async function create(data: {
  name: string;
  institution: string;
}): Promise<LaboratoryDataAPI> {
  try {
    const response = await api.post<LaboratoryDataAPI>('/laboratory', data);

    return response.data;
  } catch (err) {
    throw err;
  }
}

async function addStudent(accessCode: string): Promise<AddStudentAPI> {
  try {
    const response = await api.patch<AddStudentAPI>(`/laboratory/student`, {
      accessCode,
    });

    return response.data;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message ||
        'Ocorreu um erro, por favor tente novamente.'
    );
  }
}

export async function edit(id: string, data: LaboratoryParams): Promise<void> {
  try {
    return await api.put(`/laboratory/${id}`, data);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message ||
        'Ocorreu um erro ao editar o laboratório.'
    );
  }
}

export async function remove(id: string): Promise<void> {
  try {
    return await api.delete(`/laboratory/${id}`);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    throw new Error(
      _error.response?.data.message || 'Ocorreu um erro ao excluir o laboratório'
    );
  }
}

export const laboratoryService = {
  create,
  addStudent,
  getOne,
  list,
  edit,
  remove,
};
