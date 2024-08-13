import React from 'react';
import { Screen } from '../../../components/Screen';
import { Logo } from '../../../components/Logo';
import { Box, Toast, ToastTitle, VStack, useToast } from '@gluestack-ui/themed';
import { FormTextInput } from '../../../components/FormTextInput';
import { useForm } from 'react-hook-form';
import {
  LaboratoryAccessSchema,
  laboratoryAccessSchema,
} from './laboratoryAcessSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { laboratoryService } from '../../../services/laboratory/laboratoryService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AddStudentAPI } from '../../../services/laboratory/laboratoryTypes';
import { useAuth } from '../../../context/auth/authProvider';
import { AppScreenProps } from '../../../routes/nagivationType';
import { QueryKeys } from '../../../infra/infraTypes';

export default function LaboratoryAccess({
  navigation,
}: AppScreenProps<'LaboratoryAccessScreen'>) {
  const toast = useToast();
  const { addStudentLaboratory } = useAuth();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LaboratoryAccessSchema>({
    resolver: zodResolver(laboratoryAccessSchema),
    defaultValues: {
      accessCode: '',
    },
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useMutation<AddStudentAPI, Error, string>({
    mutationFn: (accessCode) => laboratoryService.addStudent(accessCode),
    retry: false,
    onSuccess: (data) => {
      addStudentLaboratory([{ id: data.id }]);

      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'success'}>
              <VStack space="xs">
                <ToastTitle>{data.message}</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });

      queryClient.invalidateQueries({ queryKey: [QueryKeys.ChemicalsList] });

      navigation.navigate('AppTabNavigator', {
        screen: 'ChemicalsScreen',
      });

      reset();
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

  function submitForm(data: LaboratoryAccessSchema) {
    mutate(data.accessCode.trim());
  }

  return (
    <Screen title="Laboratórios">
      <Box mt="$16">
        <Logo subtitle="Por favor, insira o seu código de acesso abaixo para entrar no laboratório:" />
      </Box>
      <VStack space="3xl" my="$12">
        <FormTextInput
          placeholder="Código de acesso"
          control={control}
          name="accessCode"
          errorMessage={errors.accessCode?.message}
        />
      </VStack>

      <Button isLoading={isPending} onPress={handleSubmit(submitForm)}>
        ENTRAR
      </Button>
    </Screen>
  );
}
