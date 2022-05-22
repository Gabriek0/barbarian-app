import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { RegistrationScreen } from '../pages/RegistrationScreen/RegistrationScreen';
import { HomePage } from '../pages/HomePage/HomePage';
import { BarberHomePage } from '../pages/BarberHomePage/BarberHomePage';
import { AuthContextProvider } from '../context/AuthContext';
import { ThemeProvider } from 'styled-components';
import theme from '../global/theme';
import CreateScheduleScreen from '../pages/CreateScheduleScreen/CreateScheduleScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="homepage"
              component={HomePage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="barberhomepage"
              component={BarberHomePage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="createScheduleScreen"
              component={CreateScheduleScreen}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
