import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../api/api';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import NextScheduleItem from '../../components/NextScheduleItem/NextScheduleItem';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';
import { useAuthContext } from '../../context/AuthContext';
import { ScheduleItemType } from '../../dto/ScheduleItemType.dto';

import {
  Container,
  CreateScheduleButton,
  CreateScheduleText,
  ScheduleList,
  Title,
} from './styles';

export function HomePage({ navigation }: any) {
  const [schedule, setSchedule] = useState<ScheduleItemType[]>([]);

  const { loggedUser } = useAuthContext();

  async function getTodaySchedule() {
    const todayDate = new Date();

    const day = todayDate.getDate();
    const mounth = todayDate.getMonth() + 1;
    const year = todayDate.getFullYear();

    const hour = String(todayDate.getHours()).padStart(2, '0');
    const minutes = String(todayDate.getMinutes()).padStart(2, '0');

    const response = await api.get(
      `/getScheduleByUser?from=${hour}:${minutes}&to=24:00&day=${day}&mounth=${mounth}&year=${year}&userId=${loggedUser.id}`
    );

    setSchedule(response.data.scheduleItems);
  }

  async function refreshSchedule() {
    getTodaySchedule();
  }

  useEffect(() => {
    getTodaySchedule();
  }, []);

  return (
    <Container>
      <HomePageHeader
        title="Compromissos de hoje"
        refreshFunction={refreshSchedule}
      />
      <ScheduleList>
        {schedule.length > 0 &&
          schedule.map((scheduleItem, index) => {
            return <ScheduleItem key={index} scheduleItem={scheduleItem} />;
          })}

        {schedule.length === 0 && (
          <View>
            <Text>Eita, :( </Text>
            <Text>parece que você não tem compromissos hoje</Text>
          </View>
        )}
      </ScheduleList>

      <CreateScheduleButton
        onPress={() => navigation.navigate('createScheduleScreen')}
      >
        <CreateScheduleText>Agendar</CreateScheduleText>
      </CreateScheduleButton>
    </Container>
  );
}
