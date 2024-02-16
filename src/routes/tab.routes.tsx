import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Chemicals from "../screens/app/Chemicals";
import Profile from "../screens/app/Profile";
import RegisterChemicals from "../screens/app/RegisterChemicals";
import About from "../screens/app/About";
import Password from "../screens/app/Password";
import DetailsChemicals from "../screens/app/DetailsChemicals";
import Laboratory from "../screens/app/Laboratory";
import SignIn from "../screens/SignIn";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Chemicals"
        component={Chemicals}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="chemistry" color={color} size={size} />
          ),
          tabBarLabel: "Insumos",
        }}
      />

      <Tab.Screen
        name="RegisterChemicals"
        component={RegisterChemicals}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
          tabBarLabel: "Novo",
        }}
      />

      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          tabBarLabel: "SignIn",
        }}
      />

      <Tab.Screen
        name="About"
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
