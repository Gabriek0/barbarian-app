import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.gray30};
    padding: 15px 21px;
    width: 246px;
    height: 59px;
    border-radius: 8px;
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.regular} 
`;
