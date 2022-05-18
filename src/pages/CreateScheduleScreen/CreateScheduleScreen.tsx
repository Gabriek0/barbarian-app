import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';

import {
  CalendarButton,
  Container,
  Input,
  InputContainer,
  InputLabel,
} from './styles';
import { View } from 'react-native';

export default function CreateScheduleScreen() {
  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [show, setShow] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const handleShowDatePicker = () => {
    setShow(true);
  };

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  };

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
  }, [date]);

  return (
    <Container>
      <InputLabel>Dia</InputLabel>
      <InputContainer>
        <Input placeholder="dd/mm/yyyy" value={inputDate} />
        <CalendarButton onPress={handleShowDatePicker}></CalendarButton>
      </InputContainer>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Container>
  );
}
