import React from "react";

import { NavigatorScreenParams } from "@react-navigation/native";
import TabRoutes, { AppTabBottomTabParamList } from "./tab.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator"
    >
      <Stack.Screen name="AppTabNavigator" component={TabRoutes} />
    </Stack.Navigator>
  );
}
