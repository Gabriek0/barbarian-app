import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { RegistrationScreen } from '../pages/RegistrationScreen/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="RegistrationScreen" component={RegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}