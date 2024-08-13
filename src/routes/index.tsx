import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './app.stack';
import AuthStack from './auth.stack';
import { useAuth } from '../context/auth/authProvider';
import { Box, Spinner } from '@gluestack-ui/themed';

export function Routes() {
  const { isLoading, authCredentials } = useAuth();

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" color={'#fff'} />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
