import React, { useState } from 'react';
import { Screen } from '../../../components/Screen';

import { QueryKeys } from '../../../infra/infraTypes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { laboratoryService } from '../../../services/laboratory/laboratoryService';
import {
  AddIcon,
  Box,
  Fab,
  FabIcon,
  Heading,
  Input,
  InputField,
  Toast,
  ToastTitle,
  VStack,
  View,
  useToast,
} from '@gluestack-ui/themed';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormTextInput } from '../../../components/FormTextInput';
import { Button } from '../../../components/Button';
import { LaboratorySchema, laboratorySchema } from './laboratorySchema';
import { AppScreenProps } from '../../../routes/nagivationType';
import Allow from '../../../components/Allow';
import { LaboratoryParams } from '../../../services/laboratory/laboratoryTypes';
import { ModalDelete } from '../../../components/ModalDelete';

export default function Laboratory({
  route,
  navigation,
}: AppScreenProps<'LaboratoryScreen'>) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  function onClose() {
    setShowModal(false);
  }

  function onOpen() {
    setShowModal(true);
  }

  const laboratoryId = route.params.id;
  const { data: laboratory } = useQuery({
    queryKey: [QueryKeys.Laboratory, laboratoryId],
    queryFn: () => laboratoryService.getOne(laboratoryId),
    retry: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LaboratorySchema>({
    resolver: zodResolver(laboratorySchema),
    values: {
      name: laboratory?.name ?? '',
      institution: laboratory?.institution ?? '',
      accessCode: laboratory?.accessCode ?? '',
    },
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useMutation<
    void,
    Error,
    { laboratory: LaboratoryParams; id: string }
  >({
    mutationFn: ({ id, laboratory }) => laboratoryService.edit(id, laboratory),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.Laboratories, QueryKeys.ChemicalsList],
      });

      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'success'}>
              <VStack space="xs">
                <ToastTitle>Laboratório alterado com sucesso!</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });

      navigation.navigate('LaboratoriesScreen');
    },
    onError: () => {
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'error'} variant="solid">
              <VStack space="xs">
                <ToastTitle color="$red500">
                  Ocorreu um erro ao editar o laboratório, por favor tente
                  novamente.
                </ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  const { mutate: remove } = useMutation<void, Error, string>({
    mutationFn: (id) => laboratoryService.remove(id),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.Laboratories] });

      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'success'}>
              <VStack space="xs">
                <ToastTitle>Laboratório deletado com sucesso!</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });

      navigation.navigate('LaboratoriesScreen');
    },
    onError: () => {
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'error'} variant="solid">
              <VStack space="xs">
                <ToastTitle color="$red500">
                  Ocorreu um erro ao deletar o laboratório, por favor tente
                  novamente.
                </ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  function handleDelete() {
    remove(laboratoryId);
  }

  function submitForm(data: LaboratorySchema) {
    mutate({
      id: laboratoryId,
      laboratory: { name: data.name, institution: data.institution },
    });
  }

  return (
    <Screen title="Laboratório" canGoBack>
      <Box />
      <Heading
        mt={80}
        color="#FFFFFF"
        textAlign="center"
        fontSize={18}
        fontWeight="regular"
      >
        Informações do Laboratório
      </Heading>
      <View mt="$12">
        <VStack space="3xl">
          <FormTextInput
            placeholder="Instituição de Ensino"
            control={control}
            name="name"
            errorMessage={errors.name?.message}
          />
          <FormTextInput
            placeholder="Nome do laboratório"
            control={control}
            name="institution"
          />

          <FormTextInput
            placeholder="Código de acesso"
            control={control}
            name="accessCode"
            disabled
          />
        </VStack>
        <Allow roles={['ADMIN']}>
          <VStack mt="$12" space="2xl">
            <Button isLoading={isPending} onPress={handleSubmit(submitForm)}>
              EDITAR
            </Button>

            <Button onPress={onOpen}>EXCLUIR</Button>
          </VStack>
        </Allow>
      </View>
      <ModalDelete
        type="laboratory"
        showModal={showModal}
        onClose={onClose}
        onDelete={handleDelete}
      />
    </Screen>
  );
}
