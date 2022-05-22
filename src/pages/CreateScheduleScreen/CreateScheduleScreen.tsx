import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

import {
  ButtonText,
  CalendarButton,
  Container,
  Input,
  InputContainer,
  InputLabel,
  InputPicker,
  pickerSelectStyles,
} from './styles';

import { CreateScheduleButton, CreateScheduleText } from '../HomePage/styles';

export default function CreateScheduleScreen() {
  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [showDate, setShowDate] = useState(false);

  const [hour, setHour] = useState(new Date());
  const [inputHour, setInputHour] = useState('');
  const [showHour, setShowHour] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [selectedService, setSelectedService] = useState("");

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

  const placeholder = {
    label: "Selecione um serviço...",
    value: null,
    color: "#000000"
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

    if (hour) {
      setInputHour([
        padTo2Digits(hour.getHours()),
        padTo2Digits(hour.getMinutes())
      ].join(':')
      );
    };

  }, [date, hour]);

  return (
    <Container>
      <InputLabel>DIA</InputLabel>
      <InputContainer>
        <Input editable={false} placeholder="dd/mm/yyyy" value={inputDate} />
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
        <Input editable={false} placeholder="hh/mm" value={inputHour} />
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
      <RNPickerSelect
        placeholder={placeholder}
        onValueChange={(event: any) => setSelectedService(event)}
        value={selectedService}
        style={pickerSelectStyles}
        items={[
          { label: 'Football', value: 'Football' },
          { label: 'Football', value: 'Football' },
          { label: 'Football', value: 'Football' },
          { label: 'Football', value: 'Football' },
        ]}
      />

      <CreateScheduleButton>
        <CreateScheduleText>Confirmar agendamento</CreateScheduleText>
      </CreateScheduleButton>
    </Container>
  );
}
