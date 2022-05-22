import React from 'react';
import { Text } from 'react-native';
import { ScheduleItemType } from '../../dto/ScheduleItemType.dto';
import {
  ClientAndServiceContainer,
  ClientNameText,
  Container,
  DateText,
  ScheduleHoursContainer,
  ScheduleHoursItemContainer,
  ServiceTypeText,
} from './styles';

export default function ScheduleItem({
  scheduleItem,
}: {
  scheduleItem: ScheduleItemType;
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
          <DateText>{convertToHour(scheduleItem.from)}</DateText>
        </ScheduleHoursItemContainer>
        <ScheduleHoursItemContainer>
          <Text>Até:</Text>
          <DateText>{convertToHour(scheduleItem.to)}</DateText>
        </ScheduleHoursItemContainer>
      </ScheduleHoursContainer>

      {scheduleItem.whatsapp.length > 1 && <Text>{scheduleItem.whatsapp}</Text>}
    </Container>
  );
}
