import React from 'react';

import { Screen } from '../../../components/Screen';
import {
  Box,
  Image,
  Text,
  Toast,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { FormTextInput } from '../../../components/FormTextInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSelectInput } from '../../../components/FormSelectInput';
import { Chemical } from '../../../services/chemicals/chemicalsTypes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { chemicalsService } from '../../../services/chemicals/chemicalsService';
import { options } from '../../../constants/options';
import { ChemicalSchema, chemicalSchema } from './chemicalSchema';
import { Dimensions, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AppTabScreenProps } from '../../../routes/nagivationType';
import { Button } from '../../../components/Button';

import { multimidiaService } from '../../../services/multimidia/multimidiaService';
import { QueryKeys } from '../../../infra/infraTypes';
import { FormImage } from '../../../components/FormImage';
import { laboratoryService } from '../../../services/laboratory/laboratoryService';
import { toOptions } from '../../../utils/options';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default function RegisterChemicals({
  navigation,
  route,
}: AppTabScreenProps<'RegisterChemicalsScreen'>) {
  const imageUri = route.params?.imageUri;
  const toast = useToast();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChemicalSchema>({
    resolver: zodResolver(chemicalSchema),
    defaultValues: {
      name: '',
      categories: '',
      observations: '',
      quantity: undefined,
      status: '',
      subCategories: '',
      type: '',
    },
    mode: 'onSubmit',
  });

  const { data: laboratories } = useQuery({
    queryKey: [QueryKeys.Laboratories],
    queryFn: () => laboratoryService.list(),
    retry: false,
    staleTime: 0,
  });

  console.log(laboratories)

  const optionsLaboratories = toOptions(laboratories || [], 'id', 'name');

  const { mutate } = useMutation<void, Error, Chemical>({
    mutationFn: (chemical) => chemicalsService.create(chemical),
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
                <ToastTitle>Insumo cadastrado com sucesso!</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
      navigation.setParams({ imageUri: '' });
      navigation.replace('AppTabNavigator', { screen: 'ChemicalsScreen' });
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
                  Ocorreu um erro ao cadastrar o insumo, por favor tente
                  novamente.
                </ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    },
  });

  async function submitForm(data: ChemicalSchema) {
    if (!imageUri) {
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action={'error'} variant="solid">
              <VStack space="xs">
                <ToastTitle color="$red500">Adicione uma imagem.</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
      return;
    }

    const imageCover = await multimidiaService.prepareImageForUpload(imageUri);

    const image = await multimidiaService.storeImage(imageCover);

    const imageUrl =
      multimidiaService.getImage(image?.path || '').publicUrl || '';

    mutate({ ...data, imageUrl });
  }

  function navigateToCameraScreen() {
    navigation.navigate('CameraScreen');
  }

  return (
    <Screen title="Cadastrar" scrollable noPaddingHorizontal>
      {imageUri ? (
        <FormImage imageUri={imageUri} />
      ) : (
        <Pressable onPress={navigateToCameraScreen}>
          <Box
            bg="#E8E8E8"
            mt="$4"
            height={230}
            width={SCREEN_WIDTH}
            alignItems="center"
            justifyContent="center"
          >
            <Feather name="camera" size={24} color="#595959" />
            <Text color="#595959" size="xs" mt={'$1'}>
              Clique para tirar foto do insumo
            </Text>
          </Box>
        </Pressable>
      )}
      <VStack space="3xl" mt="$10" paddingHorizontal={'$6'}>
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
          errorMessage={errors.quantity?.message}
          isCleaning
        />

        <FormSelectInput
          control={control}
          name="categories"
          placeholder="Categorias"
          options={options.categories}
          errorMessage={errors.categories?.message}
        />
        <FormSelectInput
          control={control}
          name="subCategories"
          placeholder="Subcategoria"
          options={options.subCategories}
          errorMessage={errors.subCategories?.message}
        />

        <FormSelectInput
          control={control}
          name="type"
          placeholder="Tipo"
          options={options.types}
          errorMessage={errors.type?.message}
        />

        <FormSelectInput
          control={control}
          name="status"
          placeholder="Status"
          options={options.status}
          errorMessage={errors.status?.message}
        />
        <FormSelectInput
          control={control}
          name="laboratoryId"
          placeholder="Laboratório"
          options={optionsLaboratories}
          errorMessage={errors.status?.message}
        />

        <Button
          isLoading={isSubmitting}
          onPress={handleSubmit(submitForm)}
        >
          CADASTRAR
        </Button>
      </VStack>
    </Screen>
  );
}
