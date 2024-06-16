import React, {useEffect, useRef, useState} from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import SelectForm from './Inputs/SelectForm';
import towersFunc from '../data/data';
import {Data, Towers} from '../types/types';
import DatePickerComponent from './Inputs/DatePicker';
import TextArea from './Inputs/TextArea';
import ButtonComponent from './Button';
import validate from '../utils/validate';

const FormsContainer = () => {
  const [towers, setTowers] = useState<Towers | null>(null);

  const [state, setState] = useState<Data>({
    tower: '',
    floor: '',
    room: '',
    month: `${new Date().getMonth() + 1}`,
    day: `${new Date().getDate()}`,
    time: '',
    message: '',
  });

  const dropForm = () => {
    setState(prevState => ({
      ...prevState,
      tower: '',
      floor: '',
      room: '',
      month: '1',
      day: '1',
      time: '',
      message: '',
    }));
  };
  const TowerSelect = useRef<HTMLButtonElement>(null);
  const FloorSelect = useRef<HTMLButtonElement>(null);
  const RoomSelect = useRef<HTMLButtonElement>(null);
  const TimeSelect = useRef<HTMLButtonElement>(null);
  const items = [
    {
      item: TowerSelect,
      value: state.tower,
    },
    {
      item: FloorSelect,
      value: state.floor,
    },
    {
      item: RoomSelect,
      value: state.room,
    },
    {
      item: TimeSelect,
      value: state.time,
    },
  ];
  const sendForm = async (): Promise<string> => {
    let flag = true;
    for (let i = 0; i < items.length; i += 1) {
      if (validate(items[i].item.current, items[i].value)) {
        flag = false;
      }
    }
    if (flag) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(state),
      });
      if (response.ok) return 'ok';
      return 'bad';
    }
    return 'warning';
  };

  const setParametrs = (item: string, value: string | number) => {
    console.log(item, value);
    setState((prevState: Data) => ({...prevState, [item]: value}));
  };

  useEffect(() => {
    (async function () {
      const data: string = await towersFunc();
      const json = await JSON.parse(data);
      setTowers(json);
    })();
  }, []);

  return (
    <section className="form_container">
      <p className="form_container-title">Забронировать переговорную</p>

      {towers !== null ? (
        <div>
          <div className="form_inputs-container">
            <SelectForm
              name="Башня"
              typeData="tower"
              data={Object.keys(towers)}
              setParametrs={setParametrs}
              valueData={String(state.tower)}
              ref={TowerSelect}
            />
            <SelectForm
              name="Этажи"
              typeData="floor"
              data={state.tower in towers ? Object?.keys(towers?.[state.tower as keyof Towers].floor) : []}
              valueData={String(state.floor)}
              setParametrs={setParametrs}
              ref={FloorSelect}
            />
            <SelectForm
              name="Номер комнаты"
              typeData="room"
              data={
                state.tower in towers && Object.keys(towers?.[state.tower as keyof Towers].floor).includes(state.floor)
                  ? Object?.keys(towers?.[state.tower as keyof Towers]?.floor[state.floor].room)
                  : []
              }
              setParametrs={setParametrs}
              valueData={String(state.room)}
              ref={RoomSelect}
            />
          </div>
          <div className="form_time-container">
            <DatePickerComponent setParametrs={setParametrs} valueDay={state.day} valueMonth={state.month} />

            {(state.tower !== '', state.floor !== '', state.room !== '') &&
            towers?.[state.tower as keyof Towers]?.floor?.[state.floor]?.room?.[state.room]?.month[state.month]?.day !==
              undefined &&
            state.day in
              towers[state.tower as keyof Towers].floor[state.floor].room[state.room].month[state.month].day &&
            towers?.[state.tower as keyof Towers]?.floor[state.floor].room[state.room].month[
              state.month as keyof Towers
            ].day[state.day as keyof Towers].time.length !== 0 ? (
                <SelectForm
                  name="Время"
                  typeData="time"
                  data={
                    towers?.[state.tower as keyof Towers]?.floor[state.floor].room[state.room].month[state.month].day[
                      state.day
                    ].time
                  }
                  setParametrs={setParametrs}
                  valueData={state.time}
                  ref={TimeSelect}
                />
              ) : (
                <p>В данный день нет свобоного времени</p>
              )}
          </div>
          <div className="form_message-container">
            <TextArea title="Комментарий" setParametrs={setParametrs} typeData="message" valueData={state.message} />
          </div>
          <div className="form_btn-container">
            <ButtonComponent action={dropForm} title="Очистить" />
            <ButtonComponent asyncFunc action={sendForm} title="Отправить" />
          </div>
        </div>
      ) : (
        <CircularProgress variant="solid" color="neutral" sx={{m: '0 auto'}} />
      )}
    </section>
  );
};

export default FormsContainer;
