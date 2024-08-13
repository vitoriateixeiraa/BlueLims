import React from 'react';
import { Screen } from '../../../components/Screen';
import {
  Avatar,
  AvatarFallbackText,
  Button,
  ButtonText,
  Text,
  View,
} from '@gluestack-ui/themed';
import { Menu } from './components/Menu';
import { useAuth, useProfile } from '../../../context/auth/authProvider';
import { useQueryClient } from '@tanstack/react-query';

export default function Profile() {
  const { removeCredentials } = useAuth();
  const queryClient = useQueryClient();

  function signOut() {
    removeCredentials();
    queryClient.invalidateQueries();
  }

  const user = useProfile();

  return (
    <Screen title="Perfil" noPaddingHorizontal>
      <View
        paddingHorizontal="$6"
        mt="$10"
        flexDirection="row"
        gap={'$6'}
        alignItems="center"
      >
        <Avatar bgColor="#B8D3E0" size="xl" borderRadius="$full">
          <AvatarFallbackText>{user?.name}</AvatarFallbackText>
        </Avatar>
        <View>
          <Text color="#FFFFFF" bold size="3xl">
            {user?.name}
          </Text>
          <Text color="#FFFFFF" size="md">
            {user?.email}
          </Text>
        </View>
      </View>
      <View mt="$10">
        <Menu />
      </View>
      <View paddingHorizontal="$6">
        <Button
          mt={'$16'}
          size="md"
          height={50}
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          borderRadius={14}
          bgColor="#B8D3E0"
          onPress={signOut}
        >
          <ButtonText color="#1C1C1E">SAIR</ButtonText>
        </Button>
      </View>
    </Screen>
  );
}
