import React, { useState } from 'react';
import { Screen } from '../../../components/Screen';
import { Spinner, View } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

import { AppTabScreenProps } from '../../../routes/nagivationType';
import { QueryKeys } from '../../../infra/infraTypes';
import { useQuery } from '@tanstack/react-query';
import { chemicalsService } from '../../../services/chemicals/chemicalsService';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { useDebounce } from '../../../hooks/useDebounce';
import { SearchInput } from '../../../components/SearchInput';
import { ListItem } from '../../../components/ListItem';

export default function Chemicals({
  navigation,
}: AppTabScreenProps<'ChemicalsScreen'>) {
  const [search, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(search, 1500);

  const {
    data: chemicals,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [QueryKeys.ChemicalsList, debouncedSearch],
    queryFn: () => chemicalsService.getList(debouncedSearch),
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
          navigation.navigate('DetailChemicalsScreen', {
            id: item.id,
          });
        }}
      />
    );
  }

  function navigateToRegisterChemicals() {
    navigation.navigate('AppTabNavigator', {
      screen: 'RegisterChemicalsScreen',
      params: {
        imageUri: '',
      },
    });
  }

  function onChangeSeachInput(search: string) {
    setSearchInput(search);
  }

  return (
    <Screen
      noPaddingHorizontal
      title="Insumos"
      rightIcon={
        <Ionicons
          name="add-sharp"
          size={32}
          color="#ffffff"
          onPress={navigateToRegisterChemicals}
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
            data={chemicals}
          />
        </View>
      )}
    </Screen>
  );
}
