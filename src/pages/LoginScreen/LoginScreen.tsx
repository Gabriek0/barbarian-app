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
  event: ChangeEventHandler;
}

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBarber, setIsBarber] = useState(false);

  const { handleLogin, isLoading, errorMessage } = useAuthContext();

  function handleInputs(value: any, label: string) {
    if (!label) {
      return;
    }

    if (label === 'email') {
      setEmail(value.trim());
    }

    if (label === 'password') {
      setPassword(value.trim());
    }

    if (label === 'isBarber') {
      setIsBarber(value);
    }
  }

  return (
    <Container>
      <MainContainer>
        <Image source={require('../../assets/icon.png')} />

        <Input
          placeholder="exemplo@email.com"
          onChangeText={(value) => handleInputs(value, 'email')}
          keyboardType="email-address"
          autoCompleteType="email"
          autoCorrect={false}
        />
        <Input
          placeholder="******"
          onChangeText={(value) => handleInputs(value, 'password')}
          autoCorrect={false}
          secureTextEntry={true}
        />

        <StyledText>{errorMessage}</StyledText>

        <CheckboxContainer>
          <Checkbox
            value={isBarber}
            onValueChange={(value) => handleInputs(value, 'isBarber')}
            color={isBarber ? '#000' : undefined}
          />
          <StyledText>Sou barbeiro</StyledText>
        </CheckboxContainer>
      </MainContainer>
      <Button onPress={() => handleLogin(email, password, isBarber)}>
        <ButtonText>{isLoading ? 'loading' : 'login'}</ButtonText>
      </Button>
      <MakeRegisterButton
        onPress={() => navigation.navigate('RegistrationScreen')}
      >
        <Text>Não tem cadastro?</Text>
      </MakeRegisterButton>
    </Container>
  );
}
