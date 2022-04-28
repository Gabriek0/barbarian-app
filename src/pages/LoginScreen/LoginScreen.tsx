import { Text } from 'react-native';

import Checkbox from 'expo-checkbox';

import {
  Button,
  ButtonText,
  CheckboxContainer,
  Container,
  Input,
  MakeRegisterButton,
  StyledText,
  Image,
  MainContainer,
} from './styles';

import { ChangeEventHandler, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';

interface EventProps {
  event: ChangeEventHandler
}

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin, isLogged } = useAuthContext();

  function handleInputs(value: string, label: string) {
    if (!label) {
      return;
    }

    if (label === 'email') {
      setEmail(value);
    }

    if (label === 'password') {
      setPassword(value);
    }
  }


  return (
    <Container>
      <MainContainer>
        <Image source={require('../../assets/icon.png')} />

        <Input placeholder="exemplo@email.com" onChangeText={(value) => handleInputs(value, 'email')} />
        <Input placeholder="******" onChangeText={(value) => handleInputs(value, 'password')} />

        <CheckboxContainer>
          <Checkbox />
          <StyledText>Sou barbeiro</StyledText>
        </CheckboxContainer>
      </MainContainer>
      <Button onPress={() => handleLogin(email, password)}>
        <ButtonText>Login</ButtonText>
      </Button>
      <MakeRegisterButton>
        <Text>Não tem cadastro?</Text>
      </MakeRegisterButton>
    </Container>
  );
}
