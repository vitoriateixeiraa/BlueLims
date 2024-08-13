import React from 'react';

import { Logo } from '../../../components/Logo';
import { Screen } from '../../../components/Screen';
import {
  Box,
  FormControl,
  Toast,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { useForm } from 'react-hook-form';
import { SignInSchema, signInSchema } from './signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextInput } from '../../../components/FormTextInput';
import { AuthScreenProps } from '../../../routes/nagivationType';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../services/auth/authService';
import { SignInData, SignInDataAPI } from '../../../services/auth/authTypes';
import { useAuth } from '../../../context/auth/authProvider';
import { Button } from '../../../components/Button';

export default function SignIn({
  navigation,
}: AuthScreenProps<'SignInScreen'>) {
  const { saveCredentials } = useAuth();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const { mutate: signIn, isPending } = useMutation<
    SignInDataAPI,
    Error,
    SignInData
  >({
    mutationFn: (data) => authService.signIn(data),
    retry: false,
    onSuccess: async (authCredentials) => {
      await saveCredentials(authCredentials);
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
                  {error.message}
                </ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function onSubmit(data: SignInSchema) {
    signIn(data);
  }

  return (
    <Screen>
      <Box flex={1} justifyContent="center">
        <Logo />

        <FormControl mt="$16">
          <VStack space="xl">
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
          </VStack>
          <VStack mt="$12" space="2xl">
            <Button onPress={handleSubmit(onSubmit)} isLoading={isPending}>
              ENTRAR
            </Button>
            <Button onPress={navigateToSignUpScreen}>CADASTRAR</Button>
          </VStack>
        </FormControl>
      </Box>
    </Screen>
  );
}
