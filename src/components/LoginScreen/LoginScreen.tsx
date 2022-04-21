import { KeyboardAvoidingView, Text } from 'react-native';

import Checkbox from 'expo-checkbox';

//

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

export function LoginScreen() {
  return (
    <Container>
      <MainContainer>
        <Image source={require('../../assets/icon.png')} />

        <Input placeholder="example@mail.com" />
        <Input placeholder="******" />
        <CheckboxContainer>
          <Checkbox />
          <StyledText>Sou barbeiro</StyledText>
        </CheckboxContainer>
      </MainContainer>
      <Button>
        <ButtonText>Login</ButtonText>
      </Button>
      <MakeRegisterButton>
        <Text>Não tem cadastro?</Text>
      </MakeRegisterButton>
    </Container>
  );
}
