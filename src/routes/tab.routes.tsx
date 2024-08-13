import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Chemicals from '../screens/app/Chemicals';

import RegisterChemicals from '../screens/app/RegisterChemicals';

import Profile from '../screens/app/Profile';
import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  ChemicalsScreen: undefined;
  RegisterChemicalsScreen: {
    imageUri?: string;
  };
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export default function TabRoutes() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name="ChemicalsScreen" component={Chemicals} />

      <Tab.Screen
        // options={{
        //   tabBarHideOnKeyboard: true,
        // }}
        name="RegisterChemicalsScreen"
        component={RegisterChemicals}
      />

      <Tab.Screen
        // options={{
        //   tabBarHideOnKeyboard: true,
        // }}
        name="ProfileScreen"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
