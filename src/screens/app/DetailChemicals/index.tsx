import React, { useState } from 'react';

import { Screen } from '../../../components/Screen';
import {
  Image,
  Spinner,
  Toast,
  ToastTitle,
  VStack,
  View,
  useToast,
} from '@gluestack-ui/themed';
import { AppScreenProps } from '../../../routes/nagivationType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../../infra/infraTypes';
import { chemicalsService } from '../../../services/chemicals/chemicalsService';
import { useForm } from 'react-hook-form';
import {
  ChemicalSchema,
  chemicalSchema,
} from '../RegisterChemicals/chemicalSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextInput } from '../../../components/FormTextInput';
import { FormSelectInput } from '../../../components/FormSelectInput';
import { options } from '../../../constants/options';
import { Chemical } from '../../../services/chemicals/chemicalsTypes';
import { Dimensions } from 'react-native';
import { Button } from '../../../components/Button';
import { ModalDelete } from '../../../components/ModalDelete';
import { laboratoryService } from '../../../services/laboratory/laboratoryService';
import { toOptions } from '../../../utils/options';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default function DetailChemicals({
  route,
  navigation,
}: AppScreenProps<'DetailChemicalsScreen'>) {
  const chemicalsId = route.params.id;
  const toast = useToast();
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false);

  function onClose() {
    setShowModal(false);
  }

  function onOpen() {
    setShowModal(true);
  }

  const { data: laboratories } = useQuery({
    queryKey: [QueryKeys.Laboratories],
    queryFn: () => laboratoryService.list(),
    retry: false,
    staleTime: 0,
  });

  const optionsLaboratories = toOptions(laboratories || [], 'id', 'name');

  const {
    data: chemical,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QueryKeys.Chemicals, chemicalsId],
    queryFn: () => chemicalsService.getOne(chemicalsId),
    retry: false,
    staleTime: 0,
    enabled: !!chemicalsId,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChemicalSchema>({
    resolver: zodResolver(chemicalSchema),
    values: {
      name: chemical?.name ?? '',
      categories: chemical?.categories ?? '',
      observations: chemical?.observations ?? '',
      quantity: chemical?.quantity ?? 1,
      status: chemical?.status ?? '',
      subCategories: chemical?.subCategories ?? '',
      type: chemical?.type ?? '',
      laboratoryId: chemical?.laboratory.id ?? '',
    },
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useMutation<
    void,
    Error,
    { chemical: Chemical; id: string }
  >({
    mutationFn: ({ chemical, id }) => chemicalsService.edit(id, chemical),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ChemicalsList] });

      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'success'}>
              <VStack space="xs">
                <ToastTitle>Insumo alterado com sucesso!</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });

      navigation.navigate('AppTabNavigator', {
        screen: 'ChemicalsScreen',
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
                  Ocorreu um erro ao editar o insumo, por favor tente novamente.
                </ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  const { mutate: remove } = useMutation<void, Error, string>({
    mutationFn: (id) => chemicalsService.remove(id),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ChemicalsList] });

      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'success'}>
              <VStack space="xs">
                <ToastTitle>Insumo deletado com sucesso!</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });

      navigation.navigate('AppTabNavigator', {
        screen: 'ChemicalsScreen',
      });
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
                  Ocorreu um erro ao deletar o insumo, por favor tente
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
    remove(chemicalsId);
  }

  async function submitForm(chemical: ChemicalSchema) {
    mutate({ chemical, id: chemicalsId });
  }

  if (isLoading) {
    return (
      <View flex={1} alignItems="center" justifyContent="center">
        <Spinner size="large" color={'#fff'} />
      </View>
    );
  }

  return (
    <Screen title="Detalhes" canGoBack noPaddingHorizontal scrollable>
      <Image
        mt="$4"
        source={{ uri: chemical?.imageUrl }}
        height={250}
        width={SCREEN_WIDTH}
        alt={chemical?.name}
      />

      <View paddingHorizontal={'$6'} mt="$4">
        <VStack space="3xl">
          <FormTextInput
            placeholder="Nome do Insumo"
            control={control}
            name="name"
            errorMessage={errors.name?.message}
            isCleaning
          />
          <FormTextInput
            placeholder="Observações"
            control={control}
            name="observations"
            isCleaning
          />

          <FormTextInput
            placeholder="Quantidade"
            control={control}
            keyboardType="numeric"
            name="quantity"
            isCleaning
          />

          <FormSelectInput
            control={control}
            name="categories"
            placeholder="Categorias"
            options={options.categories}
          />
          <FormSelectInput
            control={control}
            name="subCategories"
            placeholder="Subcategoria"
            options={options.subCategories}
          />

          <FormSelectInput
            control={control}
            name="type"
            placeholder="Tipo"
            options={options.types}
          />

          <FormSelectInput
            control={control}
            name="status"
            placeholder="Status"
            options={options.status}
          />

          <FormSelectInput
            control={control}
            name="laboratoryId"
            placeholder="Laboratório"
            options={optionsLaboratories}
            errorMessage={errors.status?.message}
          />
        </VStack>
        <VStack mt="$12" space="2xl">
          <Button onPress={handleSubmit(submitForm)} isLoading={isPending}>
            EDITAR
          </Button>

          <Button onPress={onOpen}>EXCLUIR</Button>
        </VStack>
      </View>

      <ModalDelete
        type="input"
        showModal={showModal}
        onClose={onClose}
        onDelete={handleDelete}
      />
    </Screen>
  );
}
