import { Container, Input } from "./styles";

export function RegistrationScreen() {
    return (
        <Container>
            <Input placeholder="Nome" />
            <Input placeholder="exemplo@email.com" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar senha" />
        </Container>
    );
}