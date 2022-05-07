import React from 'react';
import { Text, View } from 'react-native';
import { ScheduleIteType } from '../../pages/BarberHomePage/BarberHomePage';
import {
  ClientAndServiceContainer,
  ClientNameText,
  Container,
  ScheduleHoursContainer,
  ScheduleHoursItemContainer,
  ServiceTypeText,
} from './styles';

export default function ScheduleItem({
  scheduleItem,
}: {
  scheduleItem: ScheduleIteType;
}) {
  function convertToHour(date: any): String {
    const hour = Math.floor(date / 60);
    const minutes = date % 60;

    const hourString = hour.toString();

    return `${hourString}h${minutes > 0 ? minutes + 'min' : '00min'}`;
  }

  return (
    <Container>
      <ClientAndServiceContainer>
        <ClientNameText>{scheduleItem.name}</ClientNameText>
        <ServiceTypeText>{scheduleItem.service}</ServiceTypeText>
      </ClientAndServiceContainer>
      <ScheduleHoursContainer>
        <ScheduleHoursItemContainer>
          <Text>Das:</Text>
          <Text>{convertToHour(scheduleItem.from)}</Text>
        </ScheduleHoursItemContainer>
        <ScheduleHoursItemContainer>
          <Text>Até:</Text>
          <Text>{convertToHour(scheduleItem.to)}</Text>
        </ScheduleHoursItemContainer>
      </ScheduleHoursContainer>

      {scheduleItem.whatsapp.length > 1 && <Text>{scheduleItem.whatsapp}</Text>}
    </Container>
  );
}
