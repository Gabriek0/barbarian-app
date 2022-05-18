import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.gray30};
  padding: 15px 21px;
  width: 80%;
  height: 59px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputLabel = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CalendarButton = styled.TouchableOpacity`
  background-color: blue;
  width: 50px;
  height: 50px;
  margin: 5px;
`;
