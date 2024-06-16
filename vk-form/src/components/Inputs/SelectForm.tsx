import React, {forwardRef, useEffect} from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

interface SelectFormInterface {
  name: string;
  data: string[] | number[];
  typeData: string;
  setParametrs(type: string, value: number | string): void;
  valueData: string;
}
const SelectForm = forwardRef<HTMLButtonElement, SelectFormInterface>(
  ({name, data, typeData, setParametrs, valueData}, ref) => {
    useEffect(() => {
      console.log(`rerender ${name}`);
    });
    return (
      <div className="select-form-block">
        <p className="title-item">{name}</p>
        <div className="select-form-block_item-form">
          <Select
            placeholder="-"
            className="select-form-block_select"
            onChange={(event: React.SyntheticEvent | null, value: string | null) => {
              setParametrs(typeData, (value === null ? '' : value) as string | number);
            }}
            variant="soft"
            value={valueData === null ? '' : valueData}
            ref={ref}
          >
            <Option value="">
              <em>-</em>
            </Option>
            {data.map(el => (
              <Option key={el} value={String(el)}>
                {el}
              </Option>
            ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </div>
      </div>
    );
  }
);

SelectForm.displayName = 'Select Component';

export default SelectForm;
