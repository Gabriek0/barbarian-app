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
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 4px;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  margin-top: 18px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.black};
  width: 227px;
  height: 50px;
  border-radius: 8px;
  margin-top: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const MakeRegisterButton = styled.TouchableOpacity`
  margin-top: 80px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100px;
`;

export const MainContainer = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
`;
