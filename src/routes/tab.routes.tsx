import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Chemicals from '../screens/Chemicals';
import Profile from '../screens/Profile';
import RegisterChemicals from '../screens/RegisterChemicals';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Chemicals"
                component={Chemicals}
                options={{
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name="chemistry" color={color} size={size} />,
                    tabBarLabel: 'Insumos'
                }}
            /> 
            
            <Tab.Screen
                name="RegisterChemicals"
                component={RegisterChemicals}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Novo'
                }}
            />    

            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="user" color={color} size={size} />,
                    tabBarLabel: 'Perfil'
                }}

            />
        </Tab.Navigator>
    )
}