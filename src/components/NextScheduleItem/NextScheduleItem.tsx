import React from 'react';
import { Text, View } from 'react-native';
import { ScheduleItemType } from '../../dto/ScheduleItemType.dto';
import {
  ClientAndServiceContainer,
  ClientNameText,
  Container,
  DateText,
  ScheduleDateContianer,
  ServiceTypeText,
} from './styles';

export default function NextScheduleItem({
  scheduleItem,
}: {
  scheduleItem: ScheduleItemType;
}) {
  return (
    <Container>
      <ClientAndServiceContainer>
        <ClientNameText>{scheduleItem.name}</ClientNameText>
        <ServiceTypeText>{scheduleItem.service}</ServiceTypeText>
      </ClientAndServiceContainer>
      <ScheduleDateContianer>
        <DateText>
          Data: {scheduleItem.day}/{scheduleItem.mounth}/{scheduleItem.year}
        </DateText>
      </ScheduleDateContianer>

      {scheduleItem.whatsapp.length > 1 && <Text>{scheduleItem.whatsapp}</Text>}
    </Container>
  );
}
