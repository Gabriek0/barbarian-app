import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { api } from '../../api/api';
import NextScheduleItem from '../../components/NextScheduleItem/NextScheduleItem';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';

import { Container, ScheduleList, Title } from './styles';

export interface ScheduleItemType {
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

    const day = todayDate.getDay() + 1;
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

  useEffect(() => {
    getTodaySchedule();
    getNextSchedule();
  }, []);

  return (
    <Container>
      <Title>Compromissos de hoje</Title>
      <ScheduleList>
        {schedule.map((scheduleItem) => {
          return <ScheduleItem scheduleItem={scheduleItem} />;
        })}
      </ScheduleList>

      <Title>Proximos compromissos</Title>
      <ScheduleList>
        {nextSchedule.map((scheduleItem) => {
          return <NextScheduleItem scheduleItem={scheduleItem} />;
        })}
      </ScheduleList>
    </Container>
  );
}
