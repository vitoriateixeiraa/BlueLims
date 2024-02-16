import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Register"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
          drawerLabel: "Novo",
        }}
      />

        <Drawer.Screen
          name="Register"
          component={StackRoutes}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
            drawerLabel: 'Novo',
          }}
        />
    </Drawer.Navigator>
  );
}
