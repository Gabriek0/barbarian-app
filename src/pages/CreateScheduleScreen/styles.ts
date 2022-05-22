import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 0 20px;
  padding-top: 200px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.gray30};
  padding: 15px 21px;
  width: 50%;
  height: 59px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-right: 10px;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
  padding-left: 50px;
`;

export const InputPicker = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
  padding-left: 50px;
  margin-top: 20px;
`;

export const CalendarButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.black};
  width: 80px;
  height: 80%;
  margin: 5px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-top: 13px;
`;

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginLeft: 40,
    marginRight: 50,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center"
  },
  inputAndroid: {
    fontSize: 16,
    marginLeft: 40,
    marginRight: 50,
    marginBottom: 200,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",

  }
});