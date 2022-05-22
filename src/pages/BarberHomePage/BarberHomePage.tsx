import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { api } from '../../api/api';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import NextScheduleItem from '../../components/NextScheduleItem/NextScheduleItem';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';
import { ScheduleItemType } from '../../dto/ScheduleItemType.dto';

import { Container, ScheduleList, Title } from './styles';

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
      <HomePageHeader
        title="Compromissos de hoje"
        refreshFunction={refreshSchedule}
      />
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
