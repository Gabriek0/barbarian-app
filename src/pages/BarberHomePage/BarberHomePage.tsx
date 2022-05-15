import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { api } from '../../api/api';
import NextScheduleItem from '../../components/NextScheduleItem/NextScheduleItem';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';

import { Container, ScheduleList, Title } from './styles';

export interface ScheduleItemType {
  id: number;
  day: number;
  mounth: number;
  year: number;
  from: number;
  to: number;
  name: string;
  whatsapp: string;
  service: string;
}

export function BarberHomePage() {
  const [schedule, setSchedule] = useState<ScheduleItemType[]>([]);
  const [nextSchedule, setNextSchedule] = useState<ScheduleItemType[]>([]);

  async function getTodaySchedule() {
    const todayDate = new Date();

    const day = todayDate.getDate();
    const mounth = todayDate.getMonth() + 1;
    const year = todayDate.getFullYear();

    const hour = String(todayDate.getHours()).padStart(2, '0');
    const minutes = String(todayDate.getMinutes()).padStart(2, '0');

    const response = await api.get(
      `/schedule?from=${hour}:${minutes}&to=24:00&day=${day}&mounth=${mounth}&year=${year}`
    );

    setSchedule(response.data.scheduleItems);
  }

  async function getNextSchedule() {
    const response = await api.get('/nextSchedule');

    setNextSchedule(response.data.scheduleItems);
  }

  async function refreshSchedule() {
    getTodaySchedule();
    getNextSchedule();
  }

  useEffect(() => {
    getTodaySchedule();
    getNextSchedule();
  }, []);

  return (
    <Container>
      <Title>Compromissos de hoje</Title>
      <TouchableOpacity onPress={refreshSchedule}>
        <Text>Refresh</Text>
      </TouchableOpacity>
      <ScheduleList>
        {schedule.map((scheduleItem, index) => {
          return <ScheduleItem key={index} scheduleItem={scheduleItem} />;
        })}
      </ScheduleList>

      <Title>Proximos compromissos</Title>
      <ScheduleList>
        {nextSchedule.map((scheduleItem, index) => {
          return <NextScheduleItem key={index} scheduleItem={scheduleItem} />;
        })}
      </ScheduleList>
    </Container>
  );
}
