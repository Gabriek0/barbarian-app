import React from 'react';
import { Text, View } from 'react-native';
import { ScheduleItemType } from '../../pages/BarberHomePage/BarberHomePage';
import {
  ClientAndServiceContainer,
  ClientNameText,
  Container,
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
        <Text>
          Data: {scheduleItem.day}/{scheduleItem.mounth}/{scheduleItem.year}
        </Text>
      </ScheduleDateContianer>

      {scheduleItem.whatsapp.length > 1 && <Text>{scheduleItem.whatsapp}</Text>}
    </Container>
  );
}
