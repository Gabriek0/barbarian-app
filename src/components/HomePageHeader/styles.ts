import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
`;

export const PageHeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;

export const RefreshButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;
