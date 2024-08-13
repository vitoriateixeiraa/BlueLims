import React from 'react';

import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes, { AppTabBottomTabParamList } from './tab.routes';
import About from '../screens/app/About';
import ChangePassword from '../screens/app/ChangePassword';
import DetailChemicals from '../screens/app/DetailChemicals';
import Laboratory from '../screens/app/Laboratory';
import Laboratories from '../screens/app/Laboratories';
import { CameraScreen } from '../screens/app/CameraScreen';
import RegisterLaboratory from '../screens/app/RegisterLaboratory';
import LaboratoryAccess from '../screens/app/LaboratoryAccess';
import { useRestrictedNavigation } from '../hooks/useRestrictedNavigation';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  AboutScreen: undefined;
  ChangePasswordScreen: undefined;
  DetailChemicalsScreen: {
    id: string;
    imageUri?: string;
  };
  LaboratoryScreen: {
    id: string;
  };
  LaboratoriesScreen: undefined;
  CameraScreen: undefined;
  RegisterLaboratoryScreen: undefined;
  LaboratoryAccessScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  useRestrictedNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={'AppTabNavigator'}
    >
      <Stack.Screen name="AppTabNavigator" component={TabRoutes} />
      <Stack.Screen name="AboutScreen" component={About} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePassword} />
      <Stack.Screen name="DetailChemicalsScreen" component={DetailChemicals} />
      <Stack.Screen name="LaboratoriesScreen" component={Laboratories} />
      <Stack.Screen name="LaboratoryScreen" component={Laboratory} />
      <Stack.Screen
        name="LaboratoryAccessScreen"
        component={LaboratoryAccess}
      />

      <Stack.Screen
        name="RegisterLaboratoryScreen"
        component={RegisterLaboratory}
      />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
