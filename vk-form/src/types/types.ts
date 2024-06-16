export interface Towers {
  [key: string]: {
    floor: {
      [key: string]: {
        room: {
          [key: string]: {
            month: {
              [key: string]: {
                day: {
                  [key: string]: {
                    time: string[];
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}

export interface Data {
  tower: string;
  floor: string;
  room: string;
  month: string;
  day: string;
  time: string;
  message: string;
}

export interface Date {
  [key: number]: {
    [key: number]: {
      time: string[];
    };
  };
}
