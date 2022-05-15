import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: ${({ theme }) => theme.colors.gray30};
  flex-direction: row;
`;

export const ClientAndServiceContainer = styled.View`
  width: 50%;
`;

export const ScheduleDateContianer = styled.View`
  width: 100%;
`;

export const ClientNameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
`;

export const ServiceTypeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`;
