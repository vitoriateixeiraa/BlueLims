import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="SigIn"
                component={SignIn}
            /> 
        </Stack.Navigator>
    )
}