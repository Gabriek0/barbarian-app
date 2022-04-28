import { Button, ButtonText, Container, Image, Input } from "./styles";

export function RegistrationScreen() {
    return (
        <Container>
            <Image source={require('../../assets/icon.png')} />
            <Input placeholder="Nome" />
            <Input placeholder="exemplo@email.com" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar senha" />
            <Button>
                <ButtonText>Confirmar</ButtonText>
            </Button>
        </Container>
    );
}