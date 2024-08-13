import React from 'react';

import { Logo } from '../../../components/Logo';
import { Screen } from '../../../components/Screen';
import {
  Box,
  Toast,
  ToastDescription,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { useForm } from 'react-hook-form';
import { signUpSchema, SignUpSchema } from './signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextInput } from '../../../components/FormTextInput';
import { FormRadioInput } from '../../../components/FormRadioInput';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../services/auth/authService';
import { AuthScreenProps } from '../../../routes/nagivationType';
import { SignUpData } from '../../../services/auth/authTypes';
import { ToastTitle } from '@gluestack-ui/themed';
import { Button } from '../../../components/Button';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
  role: 'USER' as SignUpSchema['role'],
};

export default function SignUp({
  navigation,
}: AuthScreenProps<'SignUpScreen'>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onSubmit',
  });


  const toast = useToast();

  const { mutate, isPending } = useMutation<void, Error, SignUpData>({
    mutationFn: (data) => authService.signUp(data),
    retry: false,
    onSuccess: () => {
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'success'}>
              <VStack space="xs">
                <ToastTitle>Sua conta foi criada com sucesso!</ToastTitle>
                <ToastDescription>
                  Agora é só fazer login na nossa plataforma
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });

      navigation.navigate('SignInScreen');
    },
    onError: (error) => {
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'error'} variant="solid">
              <VStack space="xs">
                <ToastTitle color="$red500">{error.message}</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  function onSubmit(data: SignUpSchema) {
    mutate(data);
  }

  function navigateToSignInScreen() {
    navigation.navigate('SignInScreen');
  }

  return (
    <Screen>
      <Box flex={1} justifyContent="center">
        <Logo subtitle="Insira seus dados para se cadastrar." />
        <Box mt="$16" paddingHorizontal={'$8'}>
          <FormRadioInput
            name="role"
            control={control}
            errorMessage={errors.role?.message}
            options={[
              { label: 'Administrador', value: 'ADMIN' },
              { label: 'Aluno', value: 'USER' },
            ]}
          />
        </Box>

        <VStack mt="$10" space="xl">
          <FormTextInput
            placeholder="Nome Completo"
            control={control}
            name="name"
            errorMessage={errors.name?.message}
          />
          <FormTextInput
            placeholder="E-mail"
            control={control}
            name="email"
            keyboardType="email-address"
            errorMessage={errors.email?.message}
          />
          <FormTextInput
            placeholder="Senha"
            control={control}
            name="password"
            type="password"
            errorMessage={errors.password?.message}
          />
          <FormTextInput
            placeholder="Confirme sua senha"
            control={control}
            name="confirm_password"
            type="password"
            errorMessage={errors.confirm_password?.message}
          />
        </VStack>

        <VStack mt="$12" space="2xl">
          <Button onPress={handleSubmit(onSubmit)} isLoading={isPending}>
            CADASTRAR
          </Button>

          <Button onPress={navigateToSignInScreen}>ENTRAR</Button>
        </VStack>
      </Box>
    </Screen>
  );
}
