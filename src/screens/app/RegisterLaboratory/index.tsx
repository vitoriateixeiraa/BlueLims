import React, { useState } from 'react';
import { Screen } from '../../../components/Screen';
import { Logo } from '../../../components/Logo';
import { Box, Toast, ToastTitle, VStack, useToast } from '@gluestack-ui/themed';
import { FormTextInput } from '../../../components/FormTextInput';
import { useForm } from 'react-hook-form';
import { LaboratorySchema, laboratorySchema } from './laboratorySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/Button';
import { laboratoryService } from '../../../services/laboratory/laboratoryService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Laboratory,
  LaboratoryDataAPI,
} from '../../../services/laboratory/laboratoryTypes';
import { ModalSuccess } from '../../../components/ModalSuccess';
import { useAuth } from '../../../context/auth/authProvider';
import { AppScreenProps } from '../../../routes/nagivationType';
import { QueryKeys } from '../../../infra/infraTypes';

export default function RegisterLaboratory({
  navigation,
}: AppScreenProps<'RegisterLaboratoryScreen'>) {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const { addTeacherLaboratory } = useAuth();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LaboratorySchema>({
    resolver: zodResolver(laboratorySchema),
    defaultValues: {
      name: '',
      institution: '',
    },
    mode: 'onSubmit',
  });

  const { mutate, isPending, data } = useMutation<
    LaboratoryDataAPI,
    Error,
    { name: string; institution: string }
  >({
    mutationFn: (laboratory) => laboratoryService.create(laboratory),
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.Laboratories] });
      addTeacherLaboratory([{ id: data.id }]);

      onOpen();

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
                <ToastTitle color="$red500">
                  Ocorreu um erro ao cadastrar o laboratório, por favor tente
                  novamente.
                </ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  function submitForm(data: LaboratorySchema) {
    mutate(data);
  }

  function onClose() {
    setShowModal(false);
  }

  function onOpen() {
    setShowModal(true);
  }

  return (
    <Screen title="Laboratórios">
      <Box mt="$16">
        <Logo subtitle="Realize o cadastro do laboratório." />
      </Box>
      <VStack space="3xl" my="$12">
        <FormTextInput
          placeholder="Instituição de Ensino"
          control={control}
          name="institution"
          errorMessage={errors.institution?.message}
        />
        <FormTextInput
          placeholder="Nome do Laboratório"
          control={control}
          name="name"
          errorMessage={errors.name?.message}
        />
      </VStack>

      <Button isLoading={isPending} onPress={handleSubmit(submitForm)}>
        CADASTRAR
      </Button>

      <ModalSuccess
        showModal={showModal}
        onClose={onClose}
        accessCode={data?.accessCode}
      />
    </Screen>
  );
}
