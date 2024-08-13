import { AxiosError } from 'axios';
import { api } from '../../api/apiConfig';
import { SignInData, SignInDataAPI, SignUpData } from './authTypes';

async function signUp(signUpData: SignUpData): Promise<void> {
  try {
    await api.post('/user', signUpData);
  } catch (error: any) {
    const _error = error as AxiosError<{ message: string }>;

    throw new Error(
      _error.response?.data.message ||
        'Ocorreu um erro ao cadastrar sua conta, por favor tente novamente.'
    );
  }
}

async function signIn(signInData: SignInData): Promise<SignInDataAPI> {
  try {
    const response = await api.post<SignInDataAPI>('/auth/login', signInData);

    return response.data;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;

    throw new Error(
      _error.response?.data.message || 'E-mail ou senha inválidos.'
    );
  }
}

async function changePassword(password: string): Promise<{ message: string }> {
  try {
    const response = await api.patch<{ message: string }>(
      `/user/change-password`,
      { password }
    );

    return response.data;
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;

    throw new Error(_error.response?.data.message);
  }
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signUp,
  signIn,
  updateToken,
  removeToken,
  changePassword,
};
