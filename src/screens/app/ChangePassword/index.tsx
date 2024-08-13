import React from 'react';

import { Screen } from '../../../components/Screen';
import {
  Box,
  Heading,
  Toast,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { FormTextInput } from '../../../components/FormTextInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../../../components/Button';
import {
  ChangePasswordSchema,
  changePasswordSchema,
} from './changePasswordSchema';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../services/auth/authService';
import { useAuth } from '../../../context/auth/authProvider';

export default function ChangePassword() {
  const toast = useToast();
  const { userId } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: '',
      confirm_password: '',
    },
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useMutation<{ message: string }, Error, string>(
    {
      mutationFn: (password) => authService.changePassword(password),
      retry: false,
      onSuccess: () => {
        toast.show({
          placement: 'bottom',
          render: ({ id }) => {
            const toastId = 'toast-' + id;
            return (
              <Toast nativeID={toastId} action={'success'}>
                <VStack space="xs">
                  <ToastTitle>Senha alterada com sucesso!</ToastTitle>
                </VStack>
              </Toast>
            );
          },
        });
      },
      onError: (error) => {
        toast.show({
          placement: 'bottom',
          render: ({ id }) => {
            const toastId = 'toast-' + id;
            return (
              <Toast nativeID={toastId} action={'error'} variant="solid">
                <VStack space="xs">
                  <ToastTitle color="$red500">
                    {error.message
                      ? error.message
                      : 'Ocorreu um erro ao alterar sua senha, por favor tente novamente.'}
                  </ToastTitle>
                </VStack>
              </Toast>
            );
          },
        });
      },
    }
  );

  function submitForm(data: ChangePasswordSchema) {
    mutate(data.password);
  }

  return (
    <Screen title="Senha" canGoBack>
      <Box />
      <Heading
        mt={80}
        color="#FFFFFF"
        textAlign="center"
        fontSize={16}
        fontWeight="regular"
      >
        Preencha os campos abaixo para alterar a senha.
      </Heading>

      <VStack mt="$16" space="2xl">
        <FormTextInput
          type="password"
          placeholder="Nova senha"
          control={control}
          name="password"
          errorMessage={errors.password?.message}
        />

        <FormTextInput
          type="password"
          placeholder="Confirme sua senha"
          control={control}
          name="confirm_password"
          errorMessage={errors.confirm_password?.message}
        />
      </VStack>

      <Box mt="$12">
        <Button isLoading={isPending} onPress={handleSubmit(submitForm)}>
          ALTERAR SENHA
        </Button>
      </Box>
    </Screen>
  );
}
