import React, { useState } from 'react';
import { Screen } from '../../../components/Screen';
import { Spinner, View } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

import {
  AppScreenProps,
} from '../../../routes/nagivationType';
import { QueryKeys } from '../../../infra/infraTypes';
import { useQuery } from '@tanstack/react-query';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';

import { useDebounce } from '../../../hooks/useDebounce';
import { SearchInput } from '../../../components/SearchInput';

import { laboratoryService } from '../../../services/laboratory/laboratoryService';
import { ListItem } from '../../../components/ListItem';

export default function Laboratories({
  navigation,
}: AppScreenProps<'LaboratoriesScreen'>) {
  const [search, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(search, 1500);

  const {
    data: laboratories,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [QueryKeys.Laboratories, debouncedSearch],
    queryFn: () => laboratoryService.list(debouncedSearch),
    retry: false,
    staleTime: 0,
  });


  function renderItem({
    item,
  }: ListRenderItemInfo<{ name: string; id: string }>) {
    return (
      <ListItem
        {...item}
        onPress={() => {
          navigation.navigate('LaboratoryScreen', {
            id: item.id,
          });
        }}
      />
    );
  }

  function navigateToRegisterLaboratory() {
    navigation.navigate('RegisterLaboratoryScreen');
  }

  function onChangeSeachInput(search: string) {
    setSearchInput(search);
  }

  return (
    <Screen
      noPaddingHorizontal
      title="Laboratórios"
      canGoBack
      rightIcon={
        <Ionicons
          name="add-sharp"
          size={32}
          color="#ffffff"
          onPress={navigateToRegisterLaboratory}
        />
      }
    >
      <View paddingHorizontal="$6">
        <SearchInput value={search} onChange={onChangeSeachInput} />
      </View>

      {isLoading && (
        <View flex={1} alignItems="center" justifyContent="center">
          <Spinner size="large" color={'#fff'} />
        </View>
      )}

      {!isLoading && !isError && (
        <View mt="$8">
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={refetch} />
            }
            refreshing={isLoading}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            data={laboratories}
          />
        </View>
      )}
    </Screen>
  );
}
