import { useState } from "react";
import { Alert } from 'react-native';
import { useAuthContext } from "../../context/AuthContext";
import { Button, ButtonText, Container, Image, Input } from "./styles";

export function RegistrationScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { handleRegistration } = useAuthContext();

    function handleInputs(value: string, label: string) {
        if (!label) {
            return;
        }

        if (label === 'name') {
            setName(value);
        }

        if (label === 'email') {
            setEmail(value)
        }

        if (label === 'password') {
            setPassword(value);
        }

        if (label === 'confirmPassword') {
            setConfirmPassword(value);
        }
    }


    function sendToHandleRegistration() {
        if (password === confirmPassword) {
            handleRegistration(name, email, password);
        } else {
            Alert.alert('Erro', 'As senhas não coincidem, por favor, tente novamente.')
        } return;
    }

    return (
        <Container>
            <Image source={require('../../assets/icon.png')} />
            <Input placeholder="Nome" onChangeText={(value) => handleInputs(value, 'name')} />
            <Input placeholder="exemplo@email.com" onChangeText={(value) => handleInputs(value, 'email')} />
            <Input placeholder="Senha" onChangeText={(value) => handleInputs(value, 'password')} />
            <Input placeholder="Confirmar senha" onChangeText={(value) => handleInputs(value, 'confirmPassword')} />
            <Button onPress={sendToHandleRegistration}>
                <ButtonText>Confirmar</ButtonText>
            </Button>
        </Container>
    );
}