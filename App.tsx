import { LoginScreen } from './src/pages/LoginScreen/LoginScreen';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { AuthContextProvider, useAuthContext } from './src/context/AuthContext';
import { HomePage } from './src/pages/HomePage/HomePage';
import { Text, View } from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  const { isLogged } = useAuthContext();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <View />
  }

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
