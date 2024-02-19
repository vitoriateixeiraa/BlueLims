import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Chemicals from "../screens/app/Chemicals";
import RegisterChemicals from "../screens/app/RegisterChemicals";
import About from "../screens/app/About";
import SignIn from "../screens/auth/SignIn";


export type AppTabBottomTabParamList = {
  ChemicalsScreen: undefined;
  RegisterChemicalsScreen: undefined;
  AboutScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export default function TabRoutes() {
  return (
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#e91e63',
      }}
      >
      <Tab.Screen
        name="ChemicalsScreen"
        component={Chemicals}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="chemistry" color={color} size={size} />
          ),
          tabBarLabel: "Insumos",
        }}
      />

      <Tab.Screen
        name="RegisterChemicalsScreen"
        component={RegisterChemicals}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
          tabBarLabel: "Novo",
        }}
      />

      <Tab.Screen
        name="AboutScreen"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          tabBarLabel: "About",
        }}
      />
    </Tab.Navigator>
  );
}
