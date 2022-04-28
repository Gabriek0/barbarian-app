import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100px;
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.gray30};
    padding: 15px 21px;
    width: 246px;
    height: 59px;
    border-radius: 8px;
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.regular}; 
`;

export const Button = styled.TouchableOpacity`
 background-color: ${({ theme }) => theme.colors.black};
  width: 227px;
  height: 50px;
  border-radius: 8px;
  margin-top: 10px;

  justify-content: center;
  align-items: center;

  margin-top: 40px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};

`;