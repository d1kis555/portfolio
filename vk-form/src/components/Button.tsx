import React, {useState} from 'react';
import Button from '@mui/joy/Button';
import delay from '../utils/delay';

interface ButtonInterface {
  title: string;
  action(): void | Promise<string>;
  asyncFunc?: boolean;
}

const ButtonComponent: React.FC<ButtonInterface> = ({title, action, asyncFunc = false}) => {
  const [state, setState] = useState(false);
  const [sended, setSended] = useState({code: 0, status: false});

  return (
    <Button
      className={`btn_item ${asyncFunc && sended.status && sended.code === 200 && 'btn_item-sended-true'} ${
        asyncFunc && sended.status && sended.code === 400 && 'btn_item-sended-false'
      }`}
      size="md"
      color="primary"
      loading={state}
      disabled={sended.status}
      onClick={() => {
        if (!asyncFunc) {
          action();
        } else {
          setState(prevState => !prevState);

          action()!.then(res => {
            if (res === 'ok' || res === 'bad') {
              delay(2000)
                .then(() => {
                  setState(prevState => !prevState);
                  setSended(prevState => {
                    if (res === 'ok') {
                      return {code: 200, status: !prevState.status};
                    }
                    return {code: 400, status: !prevState.status};
                  });
                })
                .then(() => delay(2000))
                .then(() => {
                  setSended(prevState => ({...prevState, status: !prevState.status}));
                });

              // open.then(() => {
              //   console.log(1);

              //   setTimeout(() => {
              //     console.log(45);
              //     setSended((prevState) => !prevState);
              //   }, 2000);
              // });
            } else {
              setState(prevState => !prevState);
            }
          });
        }
      }}
      variant="outlined"
    >
      {!asyncFunc ? title : !sended.status ? title : sended.code === 200 ? 'Отправленно' : 'Ошибка, попробуйте позже'}
    </Button>
  );
};

export default ButtonComponent;
