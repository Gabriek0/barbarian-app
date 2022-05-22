import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";

import {
  ButtonText,
  CalendarButton,
  Container,
  Input,
  InputContainer,
  InputLabel,
  InputPicker,
  styles,
} from './styles';

import { CreateScheduleButton, CreateScheduleText } from '../HomePage/styles';
import { api } from '../../api/api';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';


export default function CreateScheduleScreen() {
  const { loggedUser } = useAuthContext();
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [showDate, setShowDate] = useState(false);

  const [hour, setHour] = useState(new Date());
  const [inputHour, setInputHour] = useState('');
  const [showHour, setShowHour] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [service, setService] = useState("");

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowDate(false);
    setDate(currentDate);
  };

  const onChangeHour = (event: any, selectedHour: any) => {
    const currentHour = selectedHour;
    setShowHour(false);
    setHour(currentHour);
  };

  const handleShowDatePicker = (type: string) => {
    if (type === "hour") {
      setShowHour(true);
      setShowDate(false);
    };

    if (type === "date") {
      setShowHour(false)
      setShowDate(true);
    };
  };

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  const formattedHour = (hour: Date) => {
    return [
      padTo2Digits(hour.getHours()),
      padTo2Digits(hour.getMinutes())
    ].join(':')
  }

  useEffect(() => {
    if (date) {
      setInputDate(
        [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/')
      );
    }

    if (hour) {
      setInputHour(formattedHour(hour));
    };

  }, [date, hour]);


  const handleSubmitSchedule = async () => {
    const toHour = hour.getHours() + 1;
    const toMinutes = hour.getMinutes();

    try {
      console.log({
        from: formattedHour(hour),
        to: `${padTo2Digits(toHour)}:${padTo2Digits(toMinutes)}}`,
        day: padTo2Digits(date.getDate()),
        mounth: padTo2Digits(date.getMonth() + 1),
        year: date.getFullYear(),
        service_id: 1,
        user_id: loggedUser.id
      });

      await api.post("/schedule", {
        from: formattedHour(hour),
        to: `${padTo2Digits(toHour)}:${padTo2Digits(toMinutes)}`,
        day: padTo2Digits(date.getDate()),
        mounth: padTo2Digits(date.getMonth() + 1),
        year: date.getFullYear(),
        service_id: 1,
        user_id: loggedUser.id
      });

      setInputDate("");
      setInputHour("");

      navigation.navigate("homepage");

    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <InputLabel>DIA</InputLabel>
      <InputContainer>
        <Input placeholder="dd/mm/yyyy" value={inputDate} />
        <CalendarButton onPress={() => handleShowDatePicker("date")}>
          <ButtonText>EDITAR</ButtonText>
        </CalendarButton>
      </InputContainer>
      {showDate && (
        <DateTimePicker
          mode="date"
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}
      <InputLabel>HORÁRIO</InputLabel>
      <InputContainer>
        <Input placeholder="hh/mm" value={inputHour} />
        <CalendarButton onPress={() => handleShowDatePicker("hour")}>
          <ButtonText>EDITAR</ButtonText>
        </CalendarButton>
      </InputContainer>
      {showHour && (
        <DateTimePicker
          mode="time"
          testID="dateTimeHourPicker"
          value={hour}
          is24Hour={true}
          onChange={onChangeHour}
        />
      )}
      <InputPicker>SERVIÇO</InputPicker>
      <Picker
        selectedValue={service}
        onValueChange={(value) => setService(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Barba" value="Barba" />

      </Picker>

      <CreateScheduleButton onPress={handleSubmitSchedule}>
        <CreateScheduleText>Confirmar agendamento</CreateScheduleText>
      </CreateScheduleButton>
    </Container>
  );
}
