import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 40px;
  padding: 0 10px;
  align-items: center;
`;

export const ScheduleList = styled.ScrollView`
  margin-bottom: 20px;
  width: 90%;
  height: 50%;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: left;
  padding: 0px 20px;
`;

export const CreateScheduleButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.gray30};

  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CreateScheduleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
`;

export const Message = styled.View`
  align-items: center;
  justify-content: center;
  height: 550px;
`;