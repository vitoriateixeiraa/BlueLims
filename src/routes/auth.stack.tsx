import React from 'react'; 

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

export type AuthStackParamList = {
    SignInScreen: undefined;
    SignUpScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();


export function AuthStack() {
    return (
        <Stack.Navigator 
        initialRouteName="SignInScreen"
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="SignInScreen" component={SignIn} />
            <Stack.Screen name="SignUpScreen" component={SignUp} />
        </Stack.Navigator>
    );
}
