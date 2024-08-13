import 'react-native-gesture-handler';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/auth/authProvider';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <GluestackUIProvider config={config}>
            <Routes />
            <StatusBar style="light" translucent />
          </GluestackUIProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
