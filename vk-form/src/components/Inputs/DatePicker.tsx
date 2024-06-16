import React from 'react';
import dayjs from 'dayjs';
// eslint-disable-next-line import/extensions
import ru from 'dayjs/locale/ru.js';

import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

import 'dayjs/locale/de';

interface DatePickerInterface {
  setParametrs(type: string, value: number | string): void;
  valueDay: string;
  valueMonth: string;
}

const DatePickerComponent: React.FC<DatePickerInterface> = ({setParametrs, valueDay, valueMonth}) => {
  return (
    <div className="datepicker-block">
      <p className="title-item">Дата</p>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ru}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            // label="Controlled"
            // localeText={ruRU}
            value={dayjs(`${new Date().getFullYear()}-${valueMonth}-${valueDay}`)}
            onChange={newValue => {
              if (newValue !== null) {
                setParametrs('month', String(newValue.month() + 1));
                setParametrs('day', String(newValue.date()));
              }
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerComponent;
